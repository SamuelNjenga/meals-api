'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Combination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Combination.hasMany(models.DailyFoodPreparation,{
        onDelete:"cascade",
        foreignKey:{
          name:'combinationId',
          allowNull:false
        }
      });
      Combination.hasMany(models.CombinationItem,{
        onDelete:"cascade",
        foreignKey:{
          name:'combinationId',
          allowNull:false
        }
      });
    }
  };
  Combination.init({
    combinationTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Combination',
  });
  return Combination;
};