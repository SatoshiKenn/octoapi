const express = require('express');
const router = express.Router();

const travelersController = require('../controllers/users');

router.get('/', travelersController.getAllUsers);

router.delete('/:id', travelersController.deleteUser);

module.exports = router;
