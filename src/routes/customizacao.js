const express = require('express');
const customizacaoController = require('../controllers/customizacaoController');

const router = express.Router();

router.get('/', customizacaoController.index);

module.exports = router;
