'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cadastros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apicultor: {
        allowNull: false,
        type: Sequelize.STRING(14),
        references: { model: 'Apicultores', key: 'cpf' }
      },
      apiario: {
        allowNull: false,
        type: Sequelize.STRING(45),
        references: { model: 'Apiarios', key: 'nome' }
      },
      propriedade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Propriedades', key: 'id' }
      },
      data: {
        type: Sequelize.DATE
      },
      municipio: {
        type: Sequelize.STRING(45)
      },
      comunidade: {
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
    await queryInterface.dropTable('Cadastros');
  }
};