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
    }
})

const user = mongoose.model('user', userSchema);

export default user;