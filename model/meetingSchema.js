import mongoose from "mongoose";

const meetingSchema = new mongoose.schema({
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
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true,
    }
})

const addMeeting = mongoose.model('addMeeting', meetingSchema);

export default addMeeting; 