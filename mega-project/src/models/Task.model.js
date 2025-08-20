import mongoose, { Schema } from "mongoose";
import { TaskStatus, TaskStatusEnum } from './../utils/constants/index.js'

const taskSchema = Schema({

    title: {
        type: String,
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
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: TaskStatus,
        default: TaskStatusEnum
    },
    attachments: {
        type: [
            {
                url: String,
                mimeType: String,
                size: Number
            }
        ],
        default: []
    }

}, { timestamps: true })

export const Task = mongoose.model("Task", taskSchema)