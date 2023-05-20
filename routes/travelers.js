const express = require('express');
const router = express.Router();

const travelersController = require('../controllers/travelers');

router.get('/', travelersController.getAllTravelers);

router.get('/:id', travelersController.getSingleTraveler);

router.post('/', travelersController.createTraveler);

router.put('/:id', travelersController.updateTraveler);

router.delete('/:id', travelersController.deleteTraveler);

module.exports = router;
