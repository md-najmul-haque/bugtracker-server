import Meeting from "../model/meetingSchema.js";

export const addMeeting = async (req, res) => {

    const exist = await Meeting.findOne({ time: req.body.time })

    try {
        if (exist) {
            return res.status(401).json({ message: 'Meeting already exist at this time' })
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