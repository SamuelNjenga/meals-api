'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MealCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MealCategory.hasMany(models.DailyFoodPreparation,{
        onDelete:"cascade",
        foreignKey:{
          name:'mealCategoryId',
          allowNull:false
        }
      });
    }
  };
  MealCategory.init({
    categoryTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MealCategory',
  });
  return MealCategory;
};