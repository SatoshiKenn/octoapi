const express = require('express');
const router = express.Router();

router.use('/', require('./login'));
router.use('/auth/google', require('./authentication'));
router.use('/swagger', require('./swagger'));
router.use('/travelers', require('./travelers'));
router.use('/users', require('./users'));

module.exports = router;