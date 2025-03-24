const mongoose = require("mongoose");

const AdminloginForm = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("Adminlogin", AdminloginForm);
