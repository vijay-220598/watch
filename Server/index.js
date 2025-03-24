const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const allowedUrl = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  method: ["POST", "GET"],
};
app.use(cors(allowedUrl));

const AdminloginReg = require("./Route/AdminLoginRoute");
app.use("/adminlogin", AdminloginReg);

const RegPageRouter = require("./Route/RegistrationRoute");
app.use("/registration", RegPageRouter);

const ContactRouter = require("./Route/ContactRoute");
app.use("/contact", ContactRouter);

const port = "8000";
const mongo_url = "mongodb://localhost:27017/vortex-mern";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("mongodp is connected");
    app.listen(port, () => {
      console.log(`sever is connected ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
