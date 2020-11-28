'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DailyFoodConsumptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dailyFoodPreparationId: {
        type: Sequelize.INTEGER,
        references: { model: 'dailyFoodPreparations', key: 'id' },
        onDelete: 'CASCADE',
      },
      quantityConsumed: {
        type: Sequelize.FLOAT
      },
      numberOfStudentsServed: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('DailyFoodConsumptions');
  }
};