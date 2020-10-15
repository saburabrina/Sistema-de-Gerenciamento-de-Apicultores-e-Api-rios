'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ControleVeterinarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apiario: {
        allowNull: false,
        type: Sequelize.STRING(45),
        references: { model: 'Apiarios', key: 'nome' }
      },
      dataExame: {
        type: Sequelize.DATEONLY
      },
      condicaoVeterinaria: {
        type: Sequelize.STRING(45)
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
    await queryInterface.dropTable('ControleVeterinarios');
  }
};