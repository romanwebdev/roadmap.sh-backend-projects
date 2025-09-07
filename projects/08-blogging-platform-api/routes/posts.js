import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';
import { validatePost } from '../middlewares/validate-post.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', validatePost, createPost);
router.put('/:id', validatePost, updatePost);
router.delete('/:id', deletePost);

export default router;
