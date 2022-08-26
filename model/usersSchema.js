import { mongoose } from "mongoose";

const usersSchema =new mongoose.Schema({
    email: {
        type: String,
        require: true,
    }
})

const users = mongoose.model("users",usersSchema)

export default users;