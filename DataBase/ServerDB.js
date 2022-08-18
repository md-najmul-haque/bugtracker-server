import mongoose from "mongoose";

const connection = async () => {

    try {
        await mongoose.connect(
            // DB NAJMUL
            // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zhsfr.mongodb.net/itracker`

            // DB HAMED
            `mongodb+srv://iTracker:OtE0nMRyVrzzXkpW@cluster0.dw5trqg.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log("DB connected");
    } catch (error) {
        console.log(error)
    }
}

export default connection;