'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyFoodWastage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DailyFoodWastage.belongsTo(models.DailyFoodPreparation, {
        foreignKey: {
          name: 'dailyFoodPreparationId',
          allowNull: false
        }
      });
    }
  };
  DailyFoodWastage.init({
    dailyFoodPreparationId: DataTypes.INTEGER,
    quantityUnconsumed: DataTypes.FLOAT,
    plateWasteAmount: DataTypes.FLOAT,
    totalFoodWasted: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DailyFoodWastage',
  });
  return DailyFoodWastage;
};