'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quadros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      caixa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Caixas', key: 'id' }
      },
      tipo: {
        type: Sequelize.STRING(45)
      },
      fundo: {
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
    await queryInterface.dropTable('Quadros');
  }
};