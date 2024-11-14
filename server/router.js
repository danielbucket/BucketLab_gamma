const express = require('express');
const router = express.Router();
const { GET_homeContent } = require('./controllers/Home_GET_controller');

router.get('/home', GET_homeContent);

module.exports = router;