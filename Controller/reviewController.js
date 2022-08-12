import Review from '../model/reviewSchema.js';

export const addReview = async (req, res) => {
 
  await Review.insertMany(req.body, (err) => {
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

export const showReview = async (req, res) => {
    await Review.find({ status: "active" })
    .select({
      _id: 0,
      __v: 0,
      date: 0,
    })
    // .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Success",
        });
      }
    });
  }