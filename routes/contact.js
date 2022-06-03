const express = require('express');
const { homeView } = require('../controllers/contactController');
const router = express.Router();
router.get('/contact/index', homeView);
module.exports = router;