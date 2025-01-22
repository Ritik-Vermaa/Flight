const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse , SucccessResponse } = require('../utils/common');


/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SucccessResponse.data = airplane;
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

/**
 * GET : /airplanes
 * req-body {}
 */
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SucccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SucccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * GET : /airplanes/:id
 * req-body {}
 */
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SucccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SucccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function deleteAirplane(req, res) {
    try {
        const airplane = await AirplaneService.deleteAirlane(req.params.id);
        SucccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SucccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * PUT : /airplanes/:id
 * req-body {modelNumber: 'airbus320', capacity: 200}
 * PATCH : /airplanes/:id
 * req-body {modelNumber: 'airbus320' || capacity: 200}
 */
async function updateAirplane(req, res) {
    try {
        const airplane = await AirplaneService.updateAirplane(req.body, req.params.id);
        SucccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SucccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
};
