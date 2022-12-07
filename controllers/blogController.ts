import { Request, Response } from 'express';
import Blog from '../models/blog';

type expressApp = (req: Request, res: Response) => void;

const blog_index: expressApp = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render('./blog/index', { title: 'All blogs', blogs: result });
    })
    .catch(err => {
      res.send(err);
    });
};

const blog_create: expressApp = (req, res) => {
  res.render('./blog/create', { title: 'Add new blog' });
};

const blog_post: expressApp = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => res.send(err));
};

const blog_details: expressApp = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then(result => {
      res.render('./blog/details', { title: 'Blog details', blog: result });
    })
    .catch(err => {
      res.send(err);
    });
};

const blog_delete: expressApp = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => res.send(err));
};

export { blog_index, blog_create, blog_post, blog_details, blog_delete };
