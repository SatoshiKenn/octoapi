const express = require('express');
const router = express.Router();

const travelersController = require('../controllers/travelers');
const validation = require('../middleware/validate');

router.get('/', travelersController.getAllTravelers);

router.get('/:id', travelersController.getSingleTraveler);

router.post('/', validation.saveTraveler, travelersController.createTraveler);

router.put('/:id', validation.saveTraveler, travelersController.updateTraveler);

router.delete('/:id', travelersController.deleteTraveler);

module.exports = router;
