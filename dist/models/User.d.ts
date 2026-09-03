import mongoose from "mongoose";
import { Schema } from "mongoose";
export declare const userSchema: Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
    timestamps: true;
}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps" | "toJSON" | "toObject"> & {
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
    timestamps: true;
}> & Omit<{
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const User: mongoose.Model<{
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
    timestamps: true;
}> & Omit<{
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
    timestamps: true;
}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps" | "toJSON" | "toObject"> & {
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
    timestamps: true;
}> & Omit<{
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=User.d.ts.map