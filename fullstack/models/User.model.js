import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationTokne: {
        type: String
    },
    verificationTokneExpiry: {
        type: Date
    },
    resetPasswordToken: {
        type: String
    },
     resetPasswordTokneExpiry: {
        type: Date
    },

})

const User = mongoose.model('User', userSchema)

export default User