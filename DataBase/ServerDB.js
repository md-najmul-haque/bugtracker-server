import mongoose from "mongoose";

const connection = async () => {

    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zhsfr.mongodb.net/itracker`

        )
        console.log("DB connected");
    } catch (error) {
        console.log(error)
    }
}

export default connection;