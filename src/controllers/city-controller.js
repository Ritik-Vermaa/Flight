const { CityService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse , SucccessResponse } = require('../utils/common');

/**\
 * POST : /cities
 * req.body = {name:'Lmp'}
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SucccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SucccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}


module.exports = {
    createCity
};