'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DailyFoodWastages', {
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
      quantityUnconsumed: {
        type: Sequelize.FLOAT
      },
      plateWasteAmount: {
        type: Sequelize.FLOAT
      },
      totalFoodWasted: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('DailyFoodWastages');
  }
};