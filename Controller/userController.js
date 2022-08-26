import User from "../model/userSchema.js"

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
export const signin = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password
    const user = await User.findOne({ email: email, password: password })
    try {
        if (user) {
            return res.status(200).json({ data: user })
        } else {
            return res.status(401).json('invalid login request.')
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}
