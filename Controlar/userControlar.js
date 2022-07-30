import User from "../model/userSchema"

//signup API

export const signup = async (req, res) => {
    const exist = await User.findOne({ email: req.body.email })
    try {
        if (exist) {
            return res.status(401).json({ message: 'user already exist' })
        } else {
            const user = req.body;
            const newUser = new User(user);
            await newUser.save();
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//signin API
export const login = async (req, res) => {

    try {

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}