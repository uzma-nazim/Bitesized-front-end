

import mongoose from "mongoose";

const connection = async () => {
  mongoose.connect(
      "mongodb+srv://hilalahmaddeveloper:Ekhazkba7ClBZGrd@cluster0.galtgoj.mongodb.net/bitesized",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then(() => {
      console.log("connection Successfully established");
    })
    .catch((err) => console.log(err.message));
};
export default connection;