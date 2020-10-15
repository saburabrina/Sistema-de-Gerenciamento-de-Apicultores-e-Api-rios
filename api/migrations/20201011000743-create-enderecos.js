'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.STRING(45)
      },
      numero: {
        type: Sequelize.INTEGER
      },
      complemento: {
        type: Sequelize.STRING(45)
      },
      comunidade: {
        type: Sequelize.STRING(45)
      },
      bairro: {
        type: Sequelize.STRING(45)
      },
      cidade: {
        type: Sequelize.STRING(45)
      },
      estado: {
        type: Sequelize.STRING(45)
      },
      cep: {
        type: Sequelize.STRING(9)
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
    await queryInterface.dropTable('Enderecos');
  }
};