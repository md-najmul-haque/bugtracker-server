import Meeting from "../model/meetingSchema.js";

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

export const updateMeeitng = async (req, res) => {

    const result = await Meeting.findByIdAndUpdate(
        {}
    )

}