'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Colmeias', [
      {
        especieAbelhas: "apis mellifera",
        origem: "europa",
        dataTrocaRainha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        especieAbelhas: "apis cerana",
        origem: "china",
        dataTrocaRainha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        especieAbelhas: "apis florea",
        origem: "vietnã",
        dataTrocaRainha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        especieAbelhas: "apis dorsata",
        origem: "austrália",
        dataTrocaRainha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        especieAbelhas: "apis nigrocincta",
        origem: "filipinas",
        dataTrocaRainha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colmeias', null, {});
  }
};
