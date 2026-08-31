import {type Request, type Response, type NextFunction} from 'express';
import mongoose from 'mongoose';

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error("❌ Error caught by global handler:", err.message || err);

    // Handling Mongoose validationError
    if(err instanceof mongoose.Error.ValidationError || err.name === "ValidationError") {
        return res.status(400).json({
            status: "error",
            message: err.message,
            errors: Object.values(err.errors).map((e: any) => e.message),
        })
    }

    // handling Mongoose CastError
    if(err instanceof mongoose.Error.CastError || err.name === "CastError") {
        return res.status(400).json({
            status: "error",
            message: `Invalid ${err.path}: ${err.value}`
        })
    }

    // handling Duplicate Key error
    if(err.code === 11000) {
        const field = Object.keys(err.keyValue || {})[0]
        return res.status(400).json({
            status: "error",
            message: `A record with that ${field} already exists`
        })
    }

    // Default Fallback (500 internel Error)
    return res.status(500).json({
        status: "error",
        message: err.message || "Internal Server Error"
    })

}