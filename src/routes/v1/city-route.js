const exprees = require('express');
const router = exprees.Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

// /api/v1/cities POST
router.post('/', CityMiddlewares.validateCreateRequest, CityController.createCity);

module.exports = router;