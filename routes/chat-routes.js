const express = require("express");
const router = express.Router();
const chatControllers = require("../controllers/chat-controllers");

router.post("/new-message", chatControllers.newMessage);

module.exports = router;
