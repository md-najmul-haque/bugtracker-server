import { mongoose } from "mongoose";

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    paymentId: {
        type: String,
    },
    amount: {
        type: Number
    }
})
const payment= mongoose.model('payment', paymentSchema)

export default payment; 