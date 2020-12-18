'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CombinationItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CombinationItem.belongsTo(models.Combination, {
        foreignKey: {
          name: 'combinationId',
          allowNull: false
        }
      });
      CombinationItem.belongsTo(models.Item, {
        foreignKey: {
          name: 'itemId',
          allowNull: false
        }
      });
    }
  };
  CombinationItem.init({
    combinationId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    itemRatio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CombinationItem',
  });
  return CombinationItem;
};