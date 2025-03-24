const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// CORS Configuration
const allowedUrl = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["POST", "GET"],
};
app.use(cors(allowedUrl));

// Database Connection String
const username = encodeURIComponent("viruvijay39");
const password = encodeURIComponent("9600482833");
const dbName = "yourDatabaseName";

const mongo_url = `mongodb+srv://${username}:${password}@cluster0.do4ps.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Routes
const AdminloginReg = require("./Route/AdminLoginRoute");
app.use("/adminlogin", AdminloginReg);

const RegPageRouter = require("./Route/RegistrationRoute");
app.use("/registration", RegPageRouter);

const ContactRouter = require("./Route/ContactRoute");
app.use("/contact", ContactRouter);

// Port Configuration
const port = process.env.PORT || 8000;

// MongoDB Connection
mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❗ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit on Failure
  });

module.exports = app;
