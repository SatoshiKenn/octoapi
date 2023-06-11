const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../middleware/auth');

router.get('/', (req, res) => {
    passport.authenticate('google', {scope: ['email', 'profile']});
});

module.exports = router;