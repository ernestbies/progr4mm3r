import express from 'express';
import messageController from '../controllers/messageController';
const router = express.Router();

router.post('/contact', messageController.createMessage);

export default router;
