export declare function listUsers(page: any, limit: any): Promise<{
    data: any;
    total: any;
    page: number;
    totalPage: number;
}>;
export declare function getUserById(id: string): Promise<(import("mongoose").Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
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
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare function createUser(data: any): Promise<{
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    _id: import("mongoose").Types.ObjectId;
    __v: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
}>;
export declare function updateUser(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
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
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare function followUser(userId: string, targetUserId: string): Promise<{
    follower: (import("mongoose").Document<unknown, {}, {
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
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
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>) | null;
    targetUser: (import("mongoose").Document<unknown, {}, {
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
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
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>) | null;
}>;
export declare function unFollowUser(userId: string, targetUserId: string): Promise<{
    follower: import("mongoose").Document<unknown, {}, {
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
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
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
    targetUser: import("mongoose").Document<unknown, {}, {
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
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
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        followers: import("mongoose").Types.ObjectId[];
        following: import("mongoose").Types.ObjectId[];
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
}>;
export declare function searchUsers(query: string): Promise<(import("mongoose").Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
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
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    followers: import("mongoose").Types.ObjectId[];
    following: import("mongoose").Types.ObjectId[];
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>)[]>;
//# sourceMappingURL=userService.d.ts.map