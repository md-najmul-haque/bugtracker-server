import Task from "../model/taskSchema.js";

// addTask POST API
export const addTask = async (req, res) => {

    const result = await Task.findOne({ taskName: req.body.taskName })

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

// My task GET API against each user
export const getMyTask = async (req, res) => {
    try {
        const myTask = await Task.find({ email: req.query.email })
        res.status(200).json(myTask)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// update task
export const updateTask = async (req, res) => {
    try {
        const updateTask = req.body
        console.log(updateTask)
        const result = await Task.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    ...updateTask
                }
            },
            { upsert: true }
        )
        res.status(200).json({success: true, result})
        console.log(result)
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}