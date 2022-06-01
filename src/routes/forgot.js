const express = require("express");
const forgotController = require("../controllers/forgotController");

const router = express.Router();

router.get("/", forgotController.index);

module.exports = router;
