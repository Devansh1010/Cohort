import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        if (!res) {
            console.log("Database Connection Failed")
            return Response.json({
                success: false,
                message: "Database Connection Failed"
            })
        }

        return Response.json({
            success: true,
            message: "Database Connection Successfully"
        })
    } catch (error) {
        console.log("Error Connection Database: ", error)
        return Response.json({
            success: false,
            message: "Error Connection Database"
        })
    }
}

export default dbConnect