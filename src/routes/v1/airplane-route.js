const exprees = require('express');
const router = exprees.Router();
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

// /api/v1/airplanes POST
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get('/:id', AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
router.delete('/:id', AirplaneController.deleteAirlane);

// /api/v1/airplanes/:id PUT
router.put('/:id',AirplaneMiddlewares.validateUpdateRequest ,AirplaneController.updateAirplane);

module.exports = router;