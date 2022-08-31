import Task from "../model/taskSchema.js";

// addTask POST API
export const addTask = async (req, res) => {

    const result = await Task.findOne({ issueName: req.body.issueName })

    try {
        if (result) {
            return res.status(401).json({ message: 'Task already exist' })
        } else {
            const task = req.body;
            const newTask = new Task(task)
            await newTask.save()
            res.status(200).json(task)
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

// task GET API against selected project
export const getTask = async (req, res) => {
    try {
        const task = await Task.find({ projectId: req.query.projectId })
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// update task
export const updateTask = async (req, res) => {
    try {
        const updateTask = req.body
        const result = await Task.findByIdAndUpdate(
            { id: req.params.id },
            {
                $set: {
                    ...updateTask
                }
            },
            { upsert: true }
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}