import { Router } from "express";
import {
    createPost,
    deletePost,
    getPostById,
    getPosts,
    updatePost,
} from "../controllers/posts.controllers.js";

const router = Router();

router.get('/posts', getPosts)

router.post('/posts', createPost)

router.put('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost)

router.get('/posts/:id', getPostById)

export default router;