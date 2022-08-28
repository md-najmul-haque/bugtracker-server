import Task from "../model/taskSchema.js";

// addTask POST API
export const addTask = async (req, res) => {

    const result = await Task.findOne({ issueName: req.body.issueName })

    try {
        if (result) {
            return res.status(401).json({ message: 'Task already exist' })
        } else {
            const task = req.body;
            console.log(task)
            const newTask = new Task(task)
            await newTask.save()
            res.status(200).json({ message: 'New Task added successfully' })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

// task GET API
export const getTask = async (req, res) => {
    try {
        const task = await Task.find({ projectId: req.query.id })
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}