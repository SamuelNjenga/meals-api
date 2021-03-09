const db = require('../db/models/index')

exports.createAvailableItemsStock = async data => {
  return db.AvailableItemsStock.create(data)
}

exports.updateAvailableItemsStock = async (data, root) => {
  return db.AvailableItemsStock.update(data, root)
}

exports.getAvailableItemsStocks = async () => {
  return db.AvailableItemsStock.findAll()
}

exports.deleteAvailableItemsStock = async data => {
  return db.AvailableItemsStock.destroy(data)
}
