
import User from "../model/userSchema.js"

export const updateProfile = async (req, res) => {
    // own mongoose
    // const result = await User.findOneAndUpdate({email: req.params.email}, {
    //   new: true,
    //   upsert: true,
    //   // rawResult: true // Return the raw result from the MongoDB driver
    //   rawResult: true
    // })
    
    // // await result.save();
    
    // console.log(result);

    // own MongoDB
    const email = req.params.email;
    const user = req.body;
    const filter = { email };
    const options = { upsert: true };
   
    const updatedDoc = {
      $set: {
        ...user,
      },
    };
    const result = await User.updateOne(
      filter,
      updatedDoc,
      options
    );
    res.send(result);
      }

      
export const profileInfo = async (req, res) => {
  const email = req.params.email;
  const query = { email };
  const singleUser = await User.findOne(query);
  res.send(singleUser);
}
//get all users
export const getUser = async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).json(users)
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
}