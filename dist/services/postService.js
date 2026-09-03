import { Post } from "../models/Post.js";
export async function ListPosts(filters, page, limit) {
    const pageNum = Number.isInteger(page) && page > 0 ? page : 1;
    const limitNum = Number.isInteger(limit) && limit > 0 ? Math.min(limit, 100) : 10;
    const skip = (pageNum - 1) * limitNum;
    const [posts, total] = await Promise.all([
        Post.find(filters).skip(skip).limit(limitNum),
        Post.countDocuments(filters)
    ]);
    return {
        data: posts,
        total,
        page: pageNum,
        totalPage: Math.ceil(total / limitNum)
    };
}
export async function getPostbyId(id) {
    const post = await Post.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true }).populate('author').populate('comments.author');
    if (!post) {
        return null;
    }
    return post;
}
export async function createPost(data) {
    const post = await Post.create(data);
    if (!post) {
        return console.log('Error while creating post');
    }
    return post;
}
export async function updatePost(id, userId, data) {
    const post = await Post.findById(id);
    if (!post) {
        return null;
    }
    if (!userId || post.author.toString() !== userId) {
        const error = new Error('You are not allowed to update this post');
        error.statusCode = 403;
        throw error;
    }
    const allowedFields = ['title', 'content', 'isPublished'];
    Object.assign(post, Object.fromEntries(Object.entries(data).filter(([field]) => allowedFields.includes(field))));
    await post.save();
    return post;
}
export async function deletePost(id, userId) {
    const post = await Post.findById(id);
    if (!post) {
        return null;
    }
    if (post.author.toString() !== userId) {
        const error = new Error('You are not allowed to delete this post');
        error.statusCode = 403;
        throw error;
    }
    await post.deleteOne();
    return post;
}
export async function addComment(postId, authorId, content) {
    if (!authorId)
        throw new Error('A user ID is required to comment');
    const post = await Post.findById(postId);
    if (!post) {
        const error = new Error("Post not found");
        error.statusCode = 404;
        throw error;
    }
    const updatedPost = await post.addComment(authorId, content);
    return updatedPost;
}
export async function toggleLike(postId, userId) {
    if (!userId)
        throw new Error('A user ID is required to like a post');
    const post = await Post.findById(postId);
    if (!post)
        return null;
    const result = await post.toggleLike(userId);
    return { post, result };
}
export async function getTrendingPosts(limit) {
    const post = await Post.findPopular(limit);
    return post;
}
//# sourceMappingURL=postService.js.map