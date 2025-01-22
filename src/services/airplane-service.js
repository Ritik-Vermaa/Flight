const { AirplaneRepository } = require('../repositories');
const AirplaneRepo = new AirplaneRepository();
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

async function createAirplane(data) {
    try {
        const airplane = await AirplaneRepo.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await AirplaneRepo.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot get Airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await AirplaneRepo.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane is not Present', error.statusCode);
        }
        throw new AppError('Cannot get Airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id) {
    try {
        const airplane = await AirplaneRepo.destroy(id);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane you requested to delete is not found', error.statusCode);
        }
        throw new AppError('Cannot delete Airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(data, id) {
    try {
        const airplane = await AirplaneRepo.update(data, id);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane you requested to update is not found', error.statusCode);
        }
        throw new AppError('Cannot update Airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}