'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DailyFoodPreparations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealCategoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'mealCategories', key: 'id' },
        onDelete: 'CASCADE',
      },
      combinationItemId: {
        type: Sequelize.INTEGER,
        references: { model: 'combinationItems', key: 'id' },
        onDelete: 'CASCADE',
      },
      quantityPrepared: {
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
    await queryInterface.dropTable('DailyFoodPreparations');
  }
};