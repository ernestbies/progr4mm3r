import express from 'express';
import postController from '../controllers/postController';
const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);

export default router;
