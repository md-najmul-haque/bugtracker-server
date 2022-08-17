import Meeting from "../model/meetingSchema.js";
import mongoose from 'mongoose';

// Meeting POST API
export const addMeeting = async (req, res) => {

    const result = await Meeting.findOne({ meetingTitle: req.body.projectName })

    try {
        if (result) {
            return res.status(401).json({ message: 'Meeting already exist' })
        } else {
            const meeting = res.body;
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

// Meeting update(patch) API
export const updateMeeting = async (req, res) => {

    const result = await Meeting.findByIdAndUpdate(
        { id: req.params._id },
        {
            $set: {
                meeting: req.body
            }
        },
        { new: true },
        (err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json({ message: 'meeting updated successfully' })
            }
        }
    )

}