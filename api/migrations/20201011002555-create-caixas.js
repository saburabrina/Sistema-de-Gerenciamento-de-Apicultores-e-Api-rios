'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Caixas', {
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
      colmeia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Colmeias', key: 'id' }
      },
      material: {
        type: Sequelize.STRING(45)
      },
      melgueiras: {
        type: Sequelize.INTEGER
      },
      localExtracao: {
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
    await queryInterface.dropTable('Caixas');
  }
};