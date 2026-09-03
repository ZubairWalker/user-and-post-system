import mongoose from "mongoose";

mongoose.connection.on('connected', () => {
    console.log(`Mongoose successfully opened a connection.`)
})

mongoose.connection.on('error', (error) => {
    console.log(`MongoDB runtime Error ${error.message}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`Database connection dropped`)
})

process.on('SIGINT', async () => {
    await disConnect()
    console.log(`Received termination signal, Closing Database connection`)
    process.exit(0)
})

export async function connectDB() {
    const MONGODB_URL = process.env.MONGODB_URL
    if(!MONGODB_URL) {
        throw new Error(`FATAL: MONGODB_URL is missing in environment variables`)
    }
    try {
        await mongoose.connect(MONGODB_URL);
        console.log(`MongoDB connected ${mongoose.connection.host}`)
    } catch (error) {
       console.log(`MongoDB Connection Error ${error}`)
       throw error
    }
}

export async function disConnect() {
    try {
        await mongoose.disconnect()
        if(mongoose.connection.readyState === 0) {
            console.log('MongoDB disconnected from the Atlas MongoDB')
        }
    } catch (error) {
        console.log(`${error}`)
    }
}