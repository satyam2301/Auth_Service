'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Enums } = require('../utils/common');
const { CUSTOMER, ADMIN, FLIGHT_COMPANY } = Enums.USER_ROLE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.ENUM,
        values: [CUSTOMER, ADMIN, FLIGHT_COMPANY],
        allowNull: false,
        defaultValue: CUSTOMER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  },
};
