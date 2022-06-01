const express = require("express");
const chartController = require("../controllers/chartController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, chartController.index);

module.exports = router;
