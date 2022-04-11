const express = require('express');
const cadastroController = require('../controllers/cadastroController');

const router = express.Router();

router.get('/', cadastroController.index);
router.post('/', cadastroController.salvarForm);
module.exports = router;
