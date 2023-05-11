const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  descrition: { type: String, required: true },
  address: { type: String, required: true },
  userID: { type: String, required: true },
});

module.exports = mongoose.model("Place", placeSchema);
