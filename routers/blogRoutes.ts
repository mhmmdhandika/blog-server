import express from 'express';
import {
  blog_index,
  blog_create,
  blog_post,
  blog_details,
  blog_delete,
} from '../controllers/blogController';

const router = express.Router();

// index blogs
router.get('/', blog_index);

// create new blog
router.get('/add-new', blog_create);

// post to db
router.post('/add-new', blog_post);

// get detail of blog
router.get('/:id', blog_details);

// delete a blog
router.delete('/:id', blog_delete);

export default router;
