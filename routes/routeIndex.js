const express = require('express');
const router = express.Router();
const path = require('path');

const apiRoutes = require(path.join(__dirname,'apiRoutes.js'));
const htmlRoutes = require(path.join(__dirname,'htmlRoutes.js'));

router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;