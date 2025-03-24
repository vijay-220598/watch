const express = require("express");
const router = express.Router();
const cont = require("../Controller/RegistrationController");

router.post("/registrationadd", cont.newRegistration);

module.exports = router;
