'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupplierItemsStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SupplierItemsStock.belongsTo(models.Item, {
        foreignKey: {
          name: 'itemId',
          allowNull: false
        }
      });
    }
  };
  SupplierItemsStock.init({
    itemId: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'SupplierItemsStock',
  });
  return SupplierItemsStock;
};