import express from "express";
import {createPost, getPosts, updatePost, deletePost, likePost} from "../controllers/postsController.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/create', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;