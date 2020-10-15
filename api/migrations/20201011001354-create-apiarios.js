'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Apiarios', {
      nome: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING(45)
      },
      dono: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING(14)
      },
      propriedade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Propriedades', key: 'id' }
      },
      inscricaoEstadual: {
        type: Sequelize.STRING(45)
      },
      dataFundacao: {
        type: Sequelize.DATEONLY
      },
      tipoFlorada: {
        type: Sequelize.STRING(45)
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      expandida: {
        type: Sequelize.BOOLEAN
      },
      problemaSanitario: {
        type: Sequelize.BOOLEAN
      },
      numeroCaixasPovoadas: {
        type: Sequelize.INTEGER
      },
      numeroCaixasVazias: {
        type: Sequelize.INTEGER
      },
      tipoInstalacao: {
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
    await queryInterface.dropTable('Apiarios');
  }
};