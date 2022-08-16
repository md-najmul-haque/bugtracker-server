import Meeting from "../model/meetingSchema.js";

export const addMeeting = async (req, res) => {

    const meeting = res.body;
    const newMeeting = new Meeting(meeting)

    const result = await Meeting.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                meeting: await newMeeting.save()
            }
        },
        {
            new: true,
            useFindAndModify: false
        },
        (err) => {
            if (err) {
                res.status(500).json({ message: err.message })
            } else {
                res.status(200).json({ message: 'Meeting inserted or updated successfully' })
            }
        }

    )

    // try {
    //     if (exist) {
    //         return res.status(401).json({ message: 'Meeting already exist at this time' })
    //     } else {
    //         const meeting = res.body;
    //         const newMeeting = new Meeting(meeting)
    //         await newMeeting.save()
    //         res.status(200).json({ message: 'New meeting added successfully' })
    //     }

    // } catch (error) {
    //     return res.status(500).json({ message: error.message })
    // }

}