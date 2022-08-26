import users from "../model/usersSchema";


export const allUser = async (req, res) => {
    try {
        const allUser = await users.find({});
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}