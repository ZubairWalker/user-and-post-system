import { Post } from "../models/Post.js";

export async function ListPosts(filters: Record<string, any>, page: number, limit: number) {

    const pageNum = Math.max(typeof page === 'string' ? parseInt(page, 10) : page || 1, 1)
    const limitNum = Math.min(100, Math.max(typeof limit === 'string' ? parseInt(limit, 10) : limit || 10, 1))
    const skip = (pageNum - 1) * limitNum

    const [posts, total] = await Promise.all([
        Post.find(filters).skip(skip).limit(limitNum),
        Post.countDocuments(filters)
    ])

    return {
        data: posts,
        total, 
        page: pageNum,
        totalPage: Math.ceil(total / limitNum)
    }
}

export async function getPostbyId(id: string) {
    const post = await Post.findByIdAndUpdate(id, {$inc: {views: 1}}, {new: true}).populate('author').populate('comments.author')  
    if(!post) {
        return null
    }      
    return post
}

export async function createPost(data: any) {
    const post = await Post.create(data)
    if(!post) {
        return console.log('Error while creating post')
    }
    return post
}

export async function updatePost(id: string, userId: string, data: any) {
    const post = await Post.findByIdAndUpdate(id, data, {new: true, runValidators: true})
    if(!post) {
        return null
    }
    return post
}

export async function deletePost(id: string, userId: string) {
    const post = await Post.findById(id)

    if(!post) {
        return "Post Not found"
    }

     if(post.author.toString() !== userId) {
        throw new Error('Not Authenticated to delete this post')
    }

    await post.deleteOne();
    return post;
}

export async function addComment(postId: string, authorId: string, content: any) {
    const post = await Post.findById(postId);
    if(!post) {
        throw new Error("Post not found")
    }
    const updatedPost = await (post as any).addComment(authorId, content);
    return updatedPost;
}

export async function toggleLike(postId: string, userId: string) {
    const post = await Post.findById(postId);
    const result  = await (post as any).toggleLike(userId)
    return {post, result}
}

export async function getTrendingPosts(limit: number) {
    const post = await (Post as any).findPopular(limit)
    return post
}