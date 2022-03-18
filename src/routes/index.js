const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { res.render('login', { styles: ['login'] }); });
router.get('/cadastro', (req, res) => { res.render('cadastro', { styles: ['cadastro'] }); });

module.exports = router;
