import express, {} from "express";
import * as userService from '../services/userService.js';
const router = express.Router();
// welcome part of the Router
router.get('/', (req, res, next) => {
    res.json("Welcome ... User and Posts System");
});
// users API
router.get('/api/users', async (req, res, next) => {
    try {
        const users = await userService.listUsers(req.query.page, req.query.limit);
        return res.json({
            data: users.data,
            pagination: {
                page: users.page,
                limit: users.limit,
                total: users.total,
                totalPages: users.totalPages,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
// Create User API
router.post('/api/users', async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            data: user,
            message: "Success"
        });
    }
    catch (error) {
        next(error);
    }
});
// getFollowers API
router.get('/api/users/:id/followers', async (req, res, next) => {
    try {
        const user = await userService.getFollowers(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        return res.status(200).json({ data: user });
    }
    catch (error) {
        next(error);
    }
});
// Search Users API
router.get('/api/users/search', async (req, res, next) => {
    try {
        const query = req.query.q;
        if (typeof query !== 'string' || !query.trim()) {
            return res.status(400).json({ status: "error", message: 'The q query parameter is required' });
        }
        const users = await userService.searchUsers(query.trim());
        return res.json({ data: users });
    }
    catch (error) {
        next(error);
    }
});
// Get User By Id API
router.get('/api/users/:id', async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json({ status: "error", message: 'User not found' });
        return res.json({ data: user });
    }
    catch (error) {
        next(error);
    }
});
// patch User Id API
router.patch('/api/users/:id', async (req, res, next) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user)
            return res.status(404).json({ status: "error", message: 'User not found' });
        return res.status(200).json({
            data: user,
            message: "Successfully Updated"
        });
    }
    catch (error) {
        next(error);
    }
});
// Follow user API
router.post('/api/users/:id/follow', async (req, res, next) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']);
        const users = await userService.followUser(userId, req.params.id);
        return res.status(200).json({
            data: users,
            message: "Followed Successfully ✨"
        });
    }
    catch (error) {
        next(error);
    }
});
// Unfollow user API
router.post('/api/users/:id/unfollow', async (req, res, next) => {
    try {
        const userId = (req.body.userId || req.headers['x-user-id']);
        const users = await userService.unFollowUser(userId, req.params.id);
        return res.status(200).json({
            data: users,
            message: "unfollowed 😥"
        });
    }
    catch (error) {
        next(error);
    }
});
export default router;
//# sourceMappingURL=users.js.map