import mongoose, { Schema } from "mongoose";

const projectSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    
    description: {
        type: String,
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

export const Project = mongoose.model("Project", projectSchema)