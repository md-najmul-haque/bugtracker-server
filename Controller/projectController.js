import Project from "../model/projectSchema.js";

//add project api
export const addProject = async (req, res) => {
    const exist = await Project.findOne({ projectName: req.body.projectName })
    try {
        if (exist) {
            return res.status(401).json({ message: 'Project already exist' })
        } else {
            const project = req.body;
            const newProject = new Project(project);
            await newProject.save();
            res.status(200).json({ message: project })
        }
    } catch (err) {
        console.log(res.status(500).json({ message: err.message }))
    }
}

export const getProject = async (req, res) => {
    try {
        const projects = await Project.find({});
        // console.log(projects)
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const totalProject = async (req, res) => {
    try {
        const totalprojects = await Project.find({email:req.query.email});
        // console.log(projects)
        res.status(200).json(totalprojects)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//GET Selected Project API 
export const selectedProject = async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id })
        console.log(req.params.id)
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
