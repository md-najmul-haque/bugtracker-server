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

export const storePayment = async (req, res) => {
 
  await Payment.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: 'server side error'
      })
    } else {
      res.status(200).json({ 
        message: 'review inserted successfully'
      })
    }
  });
}



