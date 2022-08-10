import Project from "../model/projectSchema.js";

//add project api
export const addProject = async (req, res) => {
    try {
        const project = req.body;
        const newProject = new Project(project);
        await newProject.save();
        res.status(200).json({ message: project })
    } catch (error) {
        console.log(res.status(500).json({ message: err.message }))
    }

}