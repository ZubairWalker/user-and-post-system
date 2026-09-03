import { User } from "../models/User.js";
export async function listUsers(page, limit) {
    const parsedPage = Number(page);
    const parsedLimit = Number(limit);
    const pageNum = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
    const limitNum = Number.isInteger(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 100) : 10;
    const skip = (pageNum - 1) * limitNum;
    const [users, total] = await Promise.all([
        User.find().skip(skip).limit(limitNum),
        User.countDocuments()
    ]);
    return {
        data: users,
        total,
        page: pageNum,
        totalPage: Math.ceil(total / limitNum)
    };
}
export async function getUserById(id) {
    const user = await User.findById(id).populate('followers').populate('following');
    if (!user) {
        return null;
    }
    return user;
}
export async function createUser(data) {
    const user = await User.create(data);
    const { password, ...obj } = user.toObject();
    return obj;
}
export async function updateUser(id, data) {
    if (data.password !== undefined) {
        const passwordError = new Error('Password changes are not supported by this endpoint');
        passwordError.statusCode = 400;
        throw passwordError;
    }
    const allowedFields = ['username', 'email', 'firstName', 'lastName'];
    const updates = Object.fromEntries(Object.entries(data).filter(([field]) => allowedFields.includes(field)));
    const user = await User.findById(id);
    if (!user) {
        return null;
    }
    Object.assign(user, updates);
    await user.save();
    return user;
}
export async function followUser(userId, targetUserId) {
    if (!userId || !targetUserId)
        throw new Error('Both user IDs are required');
    if (userId === targetUserId)
        throw new Error('A user cannot follow themselves');
    const [followerExists, targetExists] = await Promise.all([
        User.exists({ _id: userId }),
        User.exists({ _id: targetUserId }),
    ]);
    if (!followerExists || !targetExists) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }
    const follower = await User.findByIdAndUpdate(userId, { $addToSet: { following: targetUserId } });
    const targetUser = await User.findByIdAndUpdate(targetUserId, { $addToSet: { followers: userId } }, { new: true });
    return { follower, targetUser };
}
export async function unFollowUser(userId, targetUserId) {
    if (!userId || !targetUserId)
        throw new Error('Both user IDs are required');
    const follower = await User.findByIdAndUpdate(userId, { $pull: { following: targetUserId } }, { new: true });
    const targetUser = await User.findByIdAndUpdate(targetUserId, { $pull: { followers: userId } }, { new: true });
    if (!follower || !targetUser) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }
    return { follower, targetUser };
}
export async function searchUsers(query) {
    return User.find({ $text: { $search: query } });
}
//# sourceMappingURL=userService.js.map