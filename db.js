const mongoose = require("mongoose");

const connectToMongoose = async () => {
  // mongoose.connect("mongodb://127.0.0.1/myMedia");
  mongoose.connect(
    `mongodb+srv://${process.env.Db_User}:${process.env.Db_Password}@cluster0.lqtjft2.mongodb.net/${process.env.Db_Name}?retryWrites=true&w=majority`
  );
};

module.exports = connectToMongoose;
