'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasOne(models.AvailableItemsStock,{
        onDelete:"cascade",
        foreignKey:{
          name:'itemId',
          allowNull:false
        }
      });
      Item.hasMany(models.SupplierItemsStock,{
        onDelete:"cascade",
        foreignKey:{
          name:'itemId',
          allowNull:false
        }
      });
      Item.hasMany(models.CombinationItems,{
        onDelete:"cascade",
        foreignKey:{
          name:'itemId',
          allowNull:false
        }
      })
    }
  };
  Item.init({
    itemTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};