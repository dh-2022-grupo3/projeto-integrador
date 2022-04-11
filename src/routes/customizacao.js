const express = require('express');
const customizacaoController = require('../controllers/customizacaoController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, customizacaoController.index);
router.post('/', auth, customizacaoController.salvarCusotmizacao);

module.exports = router;
