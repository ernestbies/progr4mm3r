import Post from '../models/post';
import postValidation from "../utils/postValidationSchema";
import convert from "../services/mongoConverter";

const postController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(200).send(convert(posts));
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
            const {error} = postValidation(body);
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
    }
};

export default postController;
