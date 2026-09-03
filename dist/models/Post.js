import mongoose from "mongoose";
import { Schema } from "mongoose";
export const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
    },
    comments: [commentSchema],
    publishedAt: {
        type: Date,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    views: {
        type: Number,
        default: 0,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
});
postSchema.virtual("likesCount").get(function () {
    return this.likes?.length || 0;
});
postSchema.virtual("commentsCount").get(function () {
    return this.comments?.length || 0;
});
postSchema.virtual("readingTime").get(function () {
    const words = this.content.split(/\s+/).length;
    return Math.ceil(words / 200);
});
postSchema.pre("save", async function () {
    if (!this.excerpt && this.content) {
        this.excerpt = this.content.substring(0, 150) + "...";
    }
});
postSchema.pre("save", async function () {
    if (this.isPublished && !this.publishedAt) {
        this.publishedAt = new Date();
    }
});
// Instance Methods 
postSchema.methods.addComment = async function (authorId, content) {
    this.comments.push({ author: authorId, content });
    return await this.save();
};
postSchema.methods.toggleLike = async function (userId) {
    const index = this.likes.findIndex((id) => id.toString() === userId.toString());
    if (index === -1) {
        this.likes.push(userId);
    }
    else {
        this.likes.splice(index, 1);
    }
    return await this.save();
};
postSchema.statics.findByAuthor = function (authorId) {
    return this.find({ author: authorId }).sort({ createdAt: -1 });
};
postSchema.statics.findPopular = function (limit = 10) {
    return this.find({ isPublished: true })
        .sort({ views: -1 })
        .limit(limit);
};
// text Index
postSchema.index({ title: "text", content: "text" });
// Compound Index
postSchema.index({ author: 1, createdAt: -1 });
export const Post = mongoose.model("Post", postSchema);
//# sourceMappingURL=Post.js.map