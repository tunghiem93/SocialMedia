const express = require('express');
const { homeView } = require('../controllers/aboutController');
const router = express.Router();
router.get('/about/index', homeView);
module.exports = router;