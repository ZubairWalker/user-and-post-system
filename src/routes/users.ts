import express, {type NextFunction, type Request, type Response} from "express";
import * as userService from '../services/userService.js'
const router = express.Router()

// welcome part of the Router
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json("Welcome ... User and Posts System")
})

// users API
router.get('/api/users', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.listUsers(req.query.page, req.query.limit)
        return res.json(users)
    } catch (error) {
        next(error)
    }
})

// Create User API
router.post('/api/users', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.createUser(req.body)
        res.status(201).json({
            users,
            message: "Success"
        })
    } catch(error) {
        next(error)
    }
})

// Search Users API
router.get('/api/users/search', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const query = req.query.q
        if (typeof query !== 'string' || !query.trim()) {
            return res.status(400).json({message: 'The q query parameter is required'})
        }
        const users = await userService.searchUsers(query.trim())
        return res.json(users)
    } catch (error) {
        next(error)
    }
})

// Get User By Id API
router.get('/api/users/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getUserById(req.params.id as string)
        if (!users) return res.status(404).json({message: 'User not found'})
        return res.json(users)
    } catch(error) {
        next(error)
    }
})

// patch User Id API
router.patch('/api/users/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.updateUser(req.params.id as string, req.body)
        if (!users) return res.status(404).json({message: 'User not found'})
        return res.status(200).json({
            user: users,
            message: "Successfully Updated"
        })
    } catch(error) {
        next(error)
    }
})

// Follow user API
router.post('/api/users/:id/follow', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']) as string
        const users = await userService.followUser(userId, req.params.id as string);
        return res.status(200).json({
            users,
            message: "Followed Successfully ✨"
        })
    } catch(error) {
        next(error)
    }
})

// Unfollow user API
router.post('/api/users/:id/unfollow', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']) as string
        const users = await userService.unFollowUser(userId, req.params.id as string)
        return res.status(200).json({
            users,
            message: "unfollowed 😥"
        })
    } catch(error) {
        next(error)
    }
})

export default router