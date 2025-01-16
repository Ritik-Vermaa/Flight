const { AirplaneRepository } = require('../repositories');
const AirplaneRepo = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await AirplaneRepo.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane
}