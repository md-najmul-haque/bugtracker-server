import Payment from '../model/PaymentSchema.js'
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51LX2rXAsoePut0SRT74jqrj8VoNd3kF9sMQqBxuiIb4xhvNdP7b58abk5q1a2SRBDgWaHffo0QjPJmKCtSmmfr7600bQRgkBXR');


export const createPayment = async (req, res) => {
  const service = req.body;
  const price = service.price;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card']
  });
  res.send({ clientSecret: paymentIntent.client_secret })
}

/* export const storePayment = async (req, res) => {
  let data=new Payment(req.body)
  let result=await data.save()
  console.log(result)
  res.send(result)

} */

// Store payment details in  database
export const storePayment = async (req, res) => {
  const exist = await Payment.findOne({ email: req.body.email })
  try {
    if (exist) {
      return res.status(401).json({ message: 'Your Payment already done' })
    } else {
      const Payments = req.body;
      const newPayment = new Payment(Payments);
      await newPayment.save();
      res.status(200).json({ message: Payment })
    }
  } catch (err) {
    console.log(res.status(500).json({ message: err.message }))
  }
}

//getpayment details in database
export const getPayment = async (req, res) => {
      try {
        const projects = await Payment.find({email:req.query.email});
        // console.log(projects)
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




