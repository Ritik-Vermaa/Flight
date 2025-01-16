const exprees = require('express');
const  router = exprees.Router();

const {InfoController} = require('../../controllers');

router.use('/airplanes', require('./airplane-route'));
router.get('/info', InfoController.info);

module.exports = router;