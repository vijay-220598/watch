const mongoose = require("mongoose");

const Contactreg = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
  mobile: { type: Number, require: true },
  address: { type: String, require: true },
  brand: { type: String, require: true },
  model: { type: String, require: true },
});

module.exports = mongoose.model("contact", Contactreg);
