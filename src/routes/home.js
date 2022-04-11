const express = require('express');
const homeController = require('../controllers/homeController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, homeController.index);
router.post('/', auth, homeController.salvarTransacao);

module.exports = router;
