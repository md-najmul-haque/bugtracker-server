import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    address: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    facebook: {
        type: String,
        require: true,
    },
    github: {
        type: String,
        require: true,
    },
    linkedin: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    twitter: {
        type: String,
        require: true,
    }
})

const user = mongoose.model('user', userSchema);

export default user;