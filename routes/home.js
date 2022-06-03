const express = require('express');
const { homeView } = require('../controllers/homeController');
const router = express.Router();
router.get('/home/index', homeView);
module.exports = router;