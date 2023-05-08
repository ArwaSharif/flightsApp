const mongoose = require("mongoose");



//worked w/ Iya to connect the db bc my db was not called in the server.js
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to mongo...')
  } catch (error) {
      console.error(error)
  }
};


module.exports = connectDB;


      // //Global configuration
      // const mongoURI = process.env.MONGO_URI
      // const db = mongoose.connection;
      // //Connect to Mongo
      // mongoose.connect(mongoURI, {
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true
      // })
      // // Connection Error/Success
      // // Define callback functions for various events
      // db.on("error", (err) => console.log(err.message + " is mongo not running?"));
      // db.on("open", () => console.log("mongo connected: ", mongoURI));
      // db.on("close", () => console.log("mongo disconnected"));
      
      // module.exports = db;