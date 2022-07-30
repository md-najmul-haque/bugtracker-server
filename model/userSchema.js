const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
})

const user = mongoose.model('user', userSchema);

export default user;