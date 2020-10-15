'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Producoes', {
      apiario: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING(45),
        references: { model: 'Apiarios', key: 'nome' }
      },
      rotulo: {
        type: Sequelize.BOOLEAN
      },
      destino: {
        type: Sequelize.STRING(45)
      },
      tipo: {
        type: Sequelize.STRING(45)
      },
      material: {
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Producoes');
  }
};