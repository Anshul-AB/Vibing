const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, 
    socketTimeoutMS: 30000,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("error while connecting to mongodb",error));

  module.exports = connection;
