'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CombinationItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      combinationId: {
        type: Sequelize.INTEGER,
        references: { model: 'combinations', key: 'id' },
        onDelete: 'CASCADE',
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: { model: 'items', key: 'id' },
        onDelete: 'CASCADE',
      },
      itemRatio: {
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
    await queryInterface.dropTable('CombinationItems');
  }
};