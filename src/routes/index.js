const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { res.render('login', { styles: ['login'] }); });

module.exports = router;
