import mongoose from "mongoose";
import { Schema } from "mongoose";
export declare const commentSchema: Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    content: string;
    author: mongoose.Types.ObjectId;
    createdAt: NativeDate;
}, mongoose.Document<unknown, {}, {
    content: string;
    author: mongoose.Types.ObjectId;
    createdAt: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    content: string;
    author: mongoose.Types.ObjectId;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    content: string;
    author: mongoose.Types.ObjectId;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const postSchema: Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
    timestamps: true;
}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
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
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Post: mongoose.Model<{
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
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
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
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
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
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
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    title: string;
    content: string;
    excerpt?: string | null;
    comments: mongoose.Types.DocumentArray<{
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: mongoose.Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    views: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Post.d.ts.map