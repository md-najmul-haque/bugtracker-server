import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
    meetingTitle: {
        type: String,
        require: true,
        trim: true,
        min: 4,
        max: 20,
    },
    projectName: {
        type: String,
        require: true,
        trim: true,
        min: 4,
        max: 20,
    },
    meetingAgenda: {
        type: String,
        trim: true,
        min: 10,
        max: 150,
    },
    meetingLink: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        require: true,
    },
    time: {
        type: String,
        require: true,
    },
    time: {
        type: String,
    }
})

const meeting = mongoose.model('meeting', meetingSchema);

export default meeting;