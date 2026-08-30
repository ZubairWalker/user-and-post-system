import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt"

export const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    excerpt: {
        type: String
    },
    author: [{
        type:Schema.Types.ObjectId, ref: 'User',
        required: true
    }],
    likes: [{
        type: Schema.Types.ObjectId, ref: 'User' 
    }],
    },
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true},
        timestamps: true
    }

)

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

postSchema.virtual('')

