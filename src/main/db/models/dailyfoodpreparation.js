'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyFoodPreparation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DailyFoodPreparation.belongsTo(models.Combination, {
        foreignKey: {
          name: 'combinationId',
          allowNull: false
        }
      });
      DailyFoodPreparation.belongsTo(models.MealCategory, {
        foreignKey: {
          name: 'mealCategoryId',
          allowNull: false
        }
      });
      DailyFoodPreparation.hasOne(models.DailyFoodConsumption,{
        onDelete:"cascade",
        foreignKey:{
          name:'dailyFoodPreparationId',
          allowNull:false
        }
      });
      DailyFoodPreparation.hasOne(models.DailyFoodWastage,{
        onDelete:"cascade",
        foreignKey:{
          name:'dailyFoodPreparationId',
          allowNull:false
        }
      })
    }
  };
  DailyFoodPreparation.init({
    mealCategoryId: DataTypes.INTEGER,
    combinationId: DataTypes.INTEGER,
    quantityPrepared: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DailyFoodPreparation',
  });
  return DailyFoodPreparation;
};