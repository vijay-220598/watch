const express = require("express");
const router = express.Router();
const cont = require("../Controller/ContactController");

router.post("/contactadd", cont.newcontactReg);

router.get("/contactRead", cont.getContact);

router.delete("/contactDel/:id", cont.delContact);

module.exports = router;
