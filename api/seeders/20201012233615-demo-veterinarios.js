'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Veterinarios', [
      {
        nome: "Lara Sant'anna",
        crmv: "1234567",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Larissa Machado",
        crmv: "0123456",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Sabrina Sales",
        crmv: "7531594",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Veterinarios', null, {});
  }
};
