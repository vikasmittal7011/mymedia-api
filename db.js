const mongoose = require("mongoose");

const connectToMongoose = async () => {
  // mongoose.connect("mongodb://127.0.0.1/myMedia");
  mongoose.connect("mongodb+srv://vikasaggrawal700:sonu9876@cluster0.lqtjft2.mongodb.net/myMedia");
};

module.exports = connectToMongoose;