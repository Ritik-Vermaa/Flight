const exprees = require('express');
const router = exprees.Router();
const { CityController } = require('../../controllers');

// /api/v1/cities POST
router.post('/', CityController.createCity);


module.exports = router;