const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.message = "Something went wrong while creating the airplane";
        ErrorResponse.error = new AppError(['Model Number not found in incomming Request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if (!req.body.modelNumber || !req.body.capacity) {
        ErrorResponse.message = "Something went wrong while updating the airplane";
        ErrorResponse.error = new AppError(['Model Number or Capacity not found in incomming Request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}
