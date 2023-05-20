const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/travelers', require('./travelers'));

module.exports = router;