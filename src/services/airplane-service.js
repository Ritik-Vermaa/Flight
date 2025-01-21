const { AirplaneRepository } = require('../repositories');
const AirplaneRepo = new AirplaneRepository();
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

async function createAirplane(data) {
    try {
        const airplane = await AirplaneRepo.create(data);
        return airplane;
    }  catch(error) {
        if(error.name == 'SequelizeValidationError') {
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
    } catch(error) {
        throw new AppError('Cannot get Airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}