import Meeting from "../model/meetingSchema.js";
import mongoose from 'mongoose';

// Meeting POST API
export const addMeeting = async (req, res) => {

    const result = await Meeting.findOne({ meetingTitle: req.body.projectName })

    try {
        if (result) {
            return res.status(401).json({ message: 'Meeting already exist' })
        } else {
            const meeting = req.body;
            console.log(meeting)
            const newMeeting = new Meeting(meeting)
            await newMeeting.save()
            res.status(200).json({ message: 'New meeting added successfully' })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

// Meeting GET API
export const getMeeting = async (req, res) => {
    try {
        const meeting = await Meeting.find({})
        res.status(200).json(meeting)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//GET Selected Meeting API 
export const selectedMeeting = async (req, res) => {
    try {
        const meeting = await Meeting.findOne({ _id: req.params.id })
        res.status(200).json(meeting)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// Meeting update(patch) API
export const updateMeeting = async (req, res) => {


    try {
        const meeting = req.body
        const result = await Meeting.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    ...meeting
                }
            },
            { upsert: true }
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

// Meeting delete API
export const deleteMeeting = async (req, res) => {

    try {
        const result = await Meeting.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ message: 'meeting deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}