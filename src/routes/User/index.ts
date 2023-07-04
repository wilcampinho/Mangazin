const express = require("express");
const router = express.Router();
const handlers = require("./handlers");

router.post("/user/add/", handlers.addUser);

module.exports = router;
