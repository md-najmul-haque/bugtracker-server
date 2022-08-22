import Lists from "../model/taskSchema";

// Meeting POST API
export const addList = async (req, res) => {

    const result = await Lists.findOne({ task: req.body.task })

    try {
        if (result) {
            return res.status(401).json({ message: 'Task already exist' })
        } else {
            const list = req.body;
            console.log(list)
            const newList = new Lists(list)
            await newList.save()
            res.status(200).json({ message: 'New Task added successfully' })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

// Meeting GET API
export const getList = async (req, res) => {
    try {
        const list = await Meeting.find({})
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}