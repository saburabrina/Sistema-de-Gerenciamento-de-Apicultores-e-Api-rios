'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tratamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      colmeia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Colmeias', key: 'id' }
      },
      quantidadeDoses: {
        type: Sequelize.INTEGER
      },
      formaDosagem: {
        type: Sequelize.STRING(45)
      },
      doenca: {
        type: Sequelize.STRING(45)
      },
      produto: {
        type: Sequelize.STRING(45)
      },
      dataTratamento: {
        type: Sequelize.DATEONLY
      },
      veterinario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Veterinarios', key: 'id' }
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
    await queryInterface.dropTable('Tratamentos');
  }
};