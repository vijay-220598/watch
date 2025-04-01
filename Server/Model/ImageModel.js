const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: { url: { type: String }, public_id: { type: String } },
  pname: { type: String, require: true },
  pquantity: { type: String, require: true },
  prate: { type: String, require: true },
  pdescription: { type: String, require: true },
});

module.exports = mongoose.model("Image", imageSchema);
