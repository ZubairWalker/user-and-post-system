import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";
export const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, `Password must be at least 8 characters`],
        select: false
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
});
// Text Index
userSchema.index({ firstName: 'text', lastName: 'text' });
// Compound Index
userSchema.index({ username: 1, createdAt: -1 });
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
userSchema.virtual('followersCount').get(function () {
    return this.followers?.length || 0;
});
userSchema.virtual('followingCount').get(function () {
    return this.following?.length || 0;
});
// using bcrypt to hash the password
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map