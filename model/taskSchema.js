import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    Title: {
        type: String,
        require: true,
        trim: true,
        min: 4,
        max: 20,
    },
    task: {
        type: String,
        trim: true,
        min: 10,
        max: 150,
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const task = mongoose.model('lists', taskSchema);

export default task;