'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyFoodConsumption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DailyFoodConsumption.belongsTo(models.DailyFoodPreparation, {
        foreignKey: {
          name: 'dailyFoodPreparationId',
          allowNull: false
        }
      });
    }
  };
  DailyFoodConsumption.init({
    dailyFoodPreparationId: DataTypes.INTEGER,
    quantityConsumed: DataTypes.FLOAT,
    numberOfStudentsServed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DailyFoodConsumption',
  });
  return DailyFoodConsumption;
};