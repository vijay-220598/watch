const express = require("express");
const route = express.Router();
const cont = require("../Controller/ImageController");

route.post("/productimage", cont.upload, cont.imageUpload, cont.fileSave);

route.get("/productget", cont.getFile);

route.get("/readMore/:id", cont.readMore);

route.delete("/productdelete/:id", cont.deleteFile);

module.exports = route;
