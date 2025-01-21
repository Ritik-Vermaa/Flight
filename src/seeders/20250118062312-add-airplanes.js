'use strict';
const { Op } = require('sequelize')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     * cd src
     * npx sequelize db:seed:all
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus340',
        capacity: 980,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'boeing777',
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *npx sequelize db:seed:undo:all
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', { [Op.or]: [{ modelNumber: 'boeing777' }, { modelNumber: 'airbus340' }] })
  }
};
