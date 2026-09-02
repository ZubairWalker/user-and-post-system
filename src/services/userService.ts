import { User } from "../models/User.js"

export async function listUsers(page: any, limit: any) {

    const pageNum = Math.max(typeof page === 'string' ? parseInt(page, 10) : page || 1, 1)
    const limitNum = Math.min(100, Math.max(typeof limit === 'string' ? parseInt(limit, 10) : limit || 10, 1))
    const skip = (pageNum - 1) * limitNum   

    const [users, total]:any = await Promise.all([
        User.find().skip(skip).limit(limitNum),
        User.countDocuments()
    ])

    return {
        data: users,
        total,
        page: pageNum,
        totalPage: Math.ceil(total / limitNum)
    }
} 

export async function getUserById(id: string) {
    const user = await User.findById(id).populate('followers').populate('following')
    if(!user) {
        return null
    }
    return user
}

export async function createUser(data: any) {
    const user = await User.create(data)
    const {password, ...obj} = user.toObject()
    return obj
}

export async function updateUser(id: string, data: any) {
    const user = await User.findByIdAndUpdate(id, data, {new: true, runValidators: true})
    if(!user) {
        return null
    }
    return user
}

export async function followUser(userId: string, targetUserId: string) {
    const follower = await User.findByIdAndUpdate(userId, {$addToSet: {following: targetUserId}})
    const targetUser = await User.findByIdAndUpdate(targetUserId, {$addToSet: {followers: userId}})
    return {follower, targetUser}
}

export async function unFollowUser(userId: string, targetUserId: string) {
    const follower = await User.findByIdAndUpdate(userId, {$pull: {following: targetUserId}}, {new: true})
    const targetUser = await User.findByIdAndUpdate(targetUserId, {$pull: {followers: userId}}, {new: true})
    return {follower, targetUser}
}

export async function searchUsers(query: any) {
    const user = await User.find({$text: {$search: query}})
    if(!user) {
        return null
    }
    return user
}