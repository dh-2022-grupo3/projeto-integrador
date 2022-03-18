const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.render('login', { styles: ['login'] }); });
router.get('/chart', (req, res) => { res.render('chart', { styles: ['chart'] }); });
router.get('/customizacao', (req, res) => { res.render('customizacao', { styles: ['customizacao'] }); });
router.get('/forgot', (req, res) => { res.render('forgot', { styles: ['forgot'] }); });
router.get('/home', (req, res) => { res.render('home', { styles: ['home'] }); });
router.get('/login', (req, res) => { res.render('login', { styles: ['login'] }); });

module.exports = router;
