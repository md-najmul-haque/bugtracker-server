import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    issueName: {
        type: String,
        require: true,
        trim: true,
        min: 4,
        max: 20,
    },
    description: {
        type: String,
        trim: true,
        min: 10,
        max: 150,
    },
    email: {
        type: String,
        trim: true,
    },
    dueData: {
        type: Date,
        require: true,
    },
    stage: {
        type: String,
        require: true,
    },
    priority: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const task = mongoose.model('task', taskSchema);

export default task;