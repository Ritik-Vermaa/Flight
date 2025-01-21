const exprees = require('express');
const router = exprees.Router();
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

// /api/v1/airplanes POST
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get('/' , AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get('/:id', AirplaneMiddlewares.validateGetRequest, AirplaneController.getAirplane);

module.exports = router;