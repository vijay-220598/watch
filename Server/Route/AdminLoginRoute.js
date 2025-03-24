const express = require("express");
const router = express.Router();
const cont = require("../Controller/AdminController");

router.post("/adminloginadd", cont.newAdminlogin);

module.exports = router;
