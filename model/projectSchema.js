import { mongoose } from "mongoose";

const projectSchema = new mongoose.Schema({

    projectName: {
        type: String,
        require: true,
        trim: true,
        min: 4,
        max: 20,
    },
    projectDescription: {
        type: String,
        trim: true,
        min: 10,
        max: 150,
    },
    userEmail: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    startingDate: {
        type: String,
        require: true,

    },
    endData: {
        type: String,
        require: true,
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

const project = mongoose.model('project', projectSchema)

export default project; 