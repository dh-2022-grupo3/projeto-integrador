const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { res.render('login', { styles: ['login'] }); });
router.get('/cadastro', (req, res) => { res.render('cadastro', { styles: ['cadastro'] }); });
router.get('/chart', (req, res) => { res.render('chart', { styles: ['chart'] }); });
router.get('/forgot', (req, res) => { res.render('forgot', { styles: ['forgot'] }); });
router.get('/login', (req, res) => { res.render('login', { styles: ['login'] }); });

module.exports = router;
