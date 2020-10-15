'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Apicultores', {
      cpf: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING(14)
      },
      nome: {
        type: Sequelize.STRING(45)
      },
      certificacao: {
        type: Sequelize.STRING(45)
      },
      email: {
        type: Sequelize.STRING(45)
      },
      telefone: {
        type: Sequelize.STRING(13)
      },
      producaoAnual: {
        type: Sequelize.FLOAT
      },
      perfil: {
        type: Sequelize.STRING(10)
      },
      vinculo: {
        type: Sequelize.STRING(9)
      },
      endereco: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Enderecos', key: 'id' }
      },
      trabalhaEm: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Propriedades', key: 'id' }
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
    await queryInterface.dropTable('Apicultores');
  }
};