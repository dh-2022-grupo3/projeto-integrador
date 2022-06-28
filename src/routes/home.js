const express = require("express");
const homeController = require("../controllers/homeController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, homeController.index);
router.post("/", auth, homeController.salvarTransacao);
router.delete("/", auth, homeController.deletarTransacao);

module.exports = router;
