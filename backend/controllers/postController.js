import Post from '../models/post';
import Stat from '../models/stat';
import postValidation from "../utils/postValidationSchema";
import convert from "../services/mongoConverter";

const postController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            const stats = await Stat.find();
            let newStats = {};

            if(!stats.length) {
                await new Stat({visitors: 0}).save();
            } else {
                newStats = await Stat.findByIdAndUpdate(stats[0]._id, {$inc: {visitors : 1}});
            }

            res.status(200).send({visitors: newStats.visitors, posts: convert(posts)});
        } catch (error) {
            res.status(500).send(error)
        }
    },
    createPost: async (req, res) => {
        const {body} = req;
        const users = await Post.find({username: body.username});
        if(users.length) {
            res.status(401).send({errorCode: 401, errorMessage: 'Username already taken.'});
        } else {
            const {error} = postValidation(body, 'post');
            if (error) {
                res.status(401).send({errorCode: 401, errorMessage: error.details[0].message});
            } else {
                const newPost = new Post(body);
                try {
                    await newPost.save();
                } catch (error) {
                    res.status(500).send('Cannot create new post. ' + error);
                }

                res.status(201).send(convert(newPost));
            }
        }
    },
    updatePost: async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        const post = await Post.exists({_id: id});
        if(!post) {
            res.status(401).send({errorCode: 401, errorMessage: 'Post not found'});
        } else {
            const {error} = postValidation(body, 'patch');
            if (error) {
                res.status(401).send({errorCode: 401, errorMessage: error.details[0].message});
            } else {
                const newPost = await Post.findOneAndUpdate({_id: id}, body, {new: true});
                if(!newPost) {
                    res.status(500).send('Cannot update post.');
                } else {
                    res.status(200).send(convert(newPost));
                }
            }
        }
    },
    deletePost: async (req, res) => {
        const { id } = req.params;

        const removedPost = await Post.findByIdAndRemove(id);

        if (!removedPost) {
            res.status(400).send('Could not delete post');
        } else {
            res.status(204).send('Deleted post successfully');
        }
    }
};

export default postController;
