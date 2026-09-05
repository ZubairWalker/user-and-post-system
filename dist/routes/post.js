import express, {} from "express";
import * as postService from '../services/postService.js';
const postRouter = express.Router();
// Welcome part of the postRouter
postRouter.get('/post', (req, res, next) => {
    res.json('welcome to Post');
});
// API => Search Posts
postRouter.get('/api/posts/search', async (req, res, next) => {
    try {
        const query = req.query.q;
        if (typeof query !== 'string' || !query.trim()) {
            return res.status(400).json({ status: "error", message: 'The q query parameter is required' });
        }
        const post = await postService.searchPosts(query.trim());
        return res.status(200).json({ data: post });
    }
    catch (error) {
        next(error);
    }
});
// API = Getting Author ID
postRouter.get('/api/posts/author/:authorId', async (req, res, next) => {
    try {
        const posts = await postService.getPostsByAuthor(req.params.authorId);
        return res.status(200).json({ data: posts });
    }
    catch (error) {
        next(error);
    }
});
// API => get single user
postRouter.get('/api/posts/:id', async (req, res, next) => {
    try {
        const post = await postService.getPostbyId(req.params.id);
        if (!post) {
            return res.status(404).json({ status: "error", message: 'Post not found' });
        }
        return res.status(200).json({ data: post });
    }
    catch (error) {
        next(error);
    }
});
// API => Getting posts 
postRouter.get('/api/posts', async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const filters = {};
        if (req.query.isPublished !== undefined) {
            if (req.query.isPublished !== 'true' && req.query.isPublished !== 'false') {
                return res.status(400).json({ status: "error", message: 'isPublished must be true or false' });
            }
            filters.isPublished = req.query.isPublished === 'true';
        }
        const post = await postService.ListPosts(filters, page, limit);
        if (!post) {
            throw new Error('Not found');
        }
        return res.status(200).json({
            data: post.data,
            pagination: {
                page: post.page,
                limit: post.limit,
                total: post.total,
                totalPages: post.totalPages,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
// API => Create posts
postRouter.post('/api/posts', async (req, res, next) => {
    try {
        const post = await postService.createPost(req.body);
        if (!post) {
            throw new Error('Not Created');
        }
        return res.status(201).json({
            data: post,
            message: 'Post Successfully Created'
        });
    }
    catch (error) {
        next(error);
    }
});
// API => Get Trend Posts. 
postRouter.get('/api/posts/trending', async (req, res, next) => {
    try {
        const parsedLimit = Number(req.query.limit);
        const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 100) : 10;
        const post = await postService.getTrendingPosts(limit);
        if (!post) {
            throw new Error('There is no trending Posts Yet');
        }
        return res.status(200).json({ data: post });
    }
    catch (error) {
        next(error);
    }
});
// API => patch post
postRouter.patch('/api/posts/:id', async (req, res, next) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']);
        const post = await postService.updatePost(req.params.id, userId, req.body);
        if (!post) {
            return res.status(404).json({ status: "error", message: 'Post not found' });
        }
        return res.status(200).json({ data: post });
    }
    catch (error) {
        next(error);
    }
});
// API => Delete post
postRouter.delete('/api/posts/:id', async (req, res, next) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']);
        const post = await postService.deletePost(req.params.id, userId);
        if (!post) {
            return res.status(404).json({
                status: "error",
                message: 'Post not found'
            });
        }
        return res.status(200).json({
            data: post,
            message: "Successfully Deleted"
        });
    }
    catch (error) {
        next(error);
    }
});
// API => addComment
postRouter.post('/api/posts/:id/comments', async (req, res, next) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']);
        const post = await postService.addComment(req.params.id, userId, req.body.content);
        if (!post) {
            return res.status(404).json({
                status: "error",
                message: 'Post not found'
            });
        }
        return res.status(200).json({ data: post });
    }
    catch (error) {
        next(error);
    }
});
// API => ToggleLike(likes)
postRouter.post('/api/posts/:id/like', async (req, res, next) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']);
        const post = await postService.toggleLike(req.params.id, userId);
        if (!post) {
            return res.status(404).json({
                status: "error",
                message: 'Post not found'
            });
        }
        return res.status(200).json({ data: post });
    }
    catch (error) {
        next(error);
    }
});
export default postRouter;
//# sourceMappingURL=post.js.map