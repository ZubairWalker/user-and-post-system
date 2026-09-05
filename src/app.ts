import express, {type Request, type Response} from "express";
import router from "./routes/users.js";
import dotenv from "dotenv"
import { connectDB } from "./config/database.js";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorHandler.js";
import postRouter from "./routes/post.js";

dotenv.config()

const app = express()
app.use(express.json())

app.get('/api/health', (req: Request, res: Response) => {
    const isDbConnected = mongoose.connection.readyState === 1

    if(isDbConnected) {
        return res.status(200).json({
            data: {
                status: 'UP',
                database: 'Connected',
                uptime: `${Math.floor(process.uptime())}s`,
                timestamp: new Date().toISOString()
            }
        })
    }

    return res.status(503).json({
        data: {
            status: "DOWN",
            database: "Disconnected",
            timestamp: new Date().toISOString()
        }
    })
})

app.use(router)
app.use(postRouter)

app.use((req: Request, res: Response) => {
    res.status(404).json({
        status: "error",
        message: `Route ${req.method} ${req.originalUrl} not found`,
    })
})

app.use(errorHandler)

const PORT = process.env.PORT || 5000

async function startServer() {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`The PORT is running Smoothly on ${PORT}`)
        })
    } catch (error) {
        console.log("Unexpected Error while connecting")
        process.exit(1)
    }
}
startServer()