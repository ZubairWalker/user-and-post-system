export declare function ListPosts(filters: Record<string, any>, page: number, limit: number): Promise<{
    data: (import("mongoose").Document<unknown, {}, {
        title: string;
        content: string;
        excerpt?: string | null;
        comments: import("mongoose").Types.DocumentArray<{
            content: string;
            author: import("mongoose").Types.ObjectId;
            createdAt: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
            content: string;
            author: import("mongoose").Types.ObjectId;
            createdAt: NativeDate;
        }, {}, {}> & {
            content: string;
            author: import("mongoose").Types.ObjectId;
            createdAt: NativeDate;
        }>;
        publishedAt?: NativeDate | null;
        isPublished: boolean;
        author: import("mongoose").Types.ObjectId;
        likes: import("mongoose").Types.ObjectId[];
        views: number;
    } & import("mongoose").DefaultTimestampProps, {
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
        comments: import("mongoose").Types.DocumentArray<{
            content: string;
            author: import("mongoose").Types.ObjectId;
            createdAt: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
            content: string;
            author: import("mongoose").Types.ObjectId;
            createdAt: NativeDate;
        }, {}, {}> & {
            content: string;
            author: import("mongoose").Types.ObjectId;
            createdAt: NativeDate;
        }>;
        publishedAt?: NativeDate | null;
        isPublished: boolean;
        author: import("mongoose").Types.ObjectId;
        likes: import("mongoose").Types.ObjectId[];
        views: number;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>)[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare function getPostbyId(id: string): Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps, {
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
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare function createPost(data: any): Promise<void | (import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps, {
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
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>)>;
export declare function updatePost(id: string, userId: string, data: any): Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps, {
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
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare function deletePost(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps, {
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
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare function addComment(postId: string, authorId: string, content: any): Promise<any>;
export declare function toggleLike(postId: string, userId: string): Promise<any>;
export declare function getTrendingPosts(limit: number): Promise<any>;
export declare function getPostsByAuthor(authorId: string): Promise<any>;
export declare function searchPosts(query: string): Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    excerpt?: string | null;
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps, {
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
    comments: import("mongoose").Types.DocumentArray<{
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }, {}, {}> & {
        content: string;
        author: import("mongoose").Types.ObjectId;
        createdAt: NativeDate;
    }>;
    publishedAt?: NativeDate | null;
    isPublished: boolean;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    views: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>)[]>;
//# sourceMappingURL=postService.d.ts.map