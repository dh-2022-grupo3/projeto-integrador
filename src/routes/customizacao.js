const express = require('express');
const customizacaoController = require('../controllers/customizacaoController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, customizacaoController.index);

module.exports = router;
