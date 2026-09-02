import express, {type NextFunction, type Request, type Response} from "express";
import * as postService from '../services/postService.js'
import { error } from "node:console";
import query  from "express";
const postRouter = express.Router()

// Welcome part of the postRouter
postRouter.get('/post', (req: Request, res: Response, next: NextFunction) => {
    res.json('welcome to Post')
})

// API => Getting posts 
postRouter.get('/api/posts', async(req: Request, res: Response, next: NextFunction) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const post = await postService.ListPosts(req.query, page, limit)
        if(!post) {
            throw new Error('Not found')
        }
        return res.status(200).json({
            post: post,
            message: "Succesfully got posts"
        })
    } catch (error) {
        next(error)
    }
})

// API => Create posts
postRouter.post('/api/posts', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await postService.createPost(req.body);
        if(!post) {
            throw new Error('Not Created')
        }
        return res.status(201).json({
            post: post,
            message: 'Post Successfully Created'
        })
    } catch (error) {
        next(error)
    }
})

// API => Get Trend Posts. 
postRouter.get('/api/posts/trending', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const limit = Number(req.body.limit) || 10

        const post = await postService.getTrendingPosts(limit);
        if(!post) {
            throw new Error('There is no trending Posts Yet')
        }
        return res.status(200).json(post)
    } 
    catch(error) {
        next(error)
    }
})

// API => get single user
postRouter.get('/api/posts/:id', async(req: Request, res: Response, next: NextFunction) =>{
    try {
        const post = await postService.getPostbyId(req.params.id as string)
        if(!post) {
            throw new Error(`post with ${req.params.id} doesn't exist`)
        }
        return res.status(200).json({
            post: post,
            message: "Successful"
        })
    } catch (error) {
        next(error)
    }
})

// API => patch post
postRouter.patch('/api/posts/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']) as string;

        const post = await postService.updatePost(req.params.id as string, userId, req.body)
        if(!post) {
        return res.status(404).json({ error: 'Post not found' });
        }
        return res.status(200).json(post)
    } catch(error) {
        next(error)
    }
})

// API => Delete post
postRouter.delete('/api/posts/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']) as string;

        const post = await postService.deletePost(req.params.id as string, userId)
        if(!post) {
            return res.status(404).json({
                message: 'Post Not found',
                error: '404'
            })
        }
        return res.status(200).json({
            post: post,
            message: "Successfully Deleted"
        })
    } catch (error) {
        next(error)
    }
})

// API => addComment
postRouter.post('/api/posts/:id/comments', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']) as string;

        const post = await postService.addComment(req.params.id as string, userId, req.body.content)
        if(!post) {
            return res.status(404).json({
                message: 'the comment not found',
                error: '404'
            })
        }
        return res.status(200).json(post)
    } catch (error) {
        next(error)
    }
})

// API => ToggleLike(likes)
postRouter.post('/api/posts/:id/like', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']) as string;

        const post = await postService.toggleLike(req.params.id as string, userId)
        if(!post) {
            return res.status(404).json({
                message: 'post not found',
                error: '404'
            })
        }
        return res.status(200).json(post)
    } catch (error) {
        next(error)
    }
})

export default postRouter