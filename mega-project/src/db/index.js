import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected")

    } catch (error) {
        console.log(`MongoDB connection  failed ${error}`)
        throw new Error(error)
    }
}

export default dbConnect    