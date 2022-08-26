import user from '../model/userSchema.js'

//api for get all user to make admin
export const allUser = async (req, res) => {
    try {
        const allUser = await user.find({});
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}