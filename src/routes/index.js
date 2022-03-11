const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.render('login'); });
router.get('/cadastro', (req, res) => { res.render('cadastro'); });
router.get('/chart', (req, res) => { res.render('chart'); });
router.get('/customizacao', (req, res) => { res.render('customizacao'); });
router.get('/forgot', (req, res) => { res.render('forgot'); });
router.get('/home', (req, res) => { res.render('home'); });
router.get('/login', (req, res) => { res.render('login'); });

module.exports = router;
