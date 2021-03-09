const itemsStockService = require('../services/AvailableItemsStockService')
const ReqValidator = require('../utils/validator')

exports.createAvailableItemsStock = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      itemId: 'required|integer',
      quantity: 'required|integer'
    })
    if (!valid) return
    const data = {
      itemId: req.body.itemId,
      quantity: req.body.quantity
    }
    await itemsStockService.createAvailableItemsStock(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.updateAvailableItemsStock = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      itemId: 'required|integer',
      quantity: 'required|integer'
    })
    if (!valid) return
    const data = {
      itemId: req.body.itemId,
      quantity: req.body.quantity
    }
    const itemStockId = req.params.id
    await itemsStockService.updateAvailableItemsStock(data, {
      where: {
        id: itemStockId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteAvailableItemsStock = async (req, res, next) => {
  try {
    const itemStockId = req.params.id
    await itemsStockService.deleteAvailableItemsStock({
      where: {
        id: itemStockId
      }
    })
    res.status(200).json({
      data: null,
      message: `AvailableItemStock ${itemStockId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getAvailableItemsStocks = async (req, res) => {
  try {
    const itemsStocks = await itemsStockService.getAvailableItemsStocks()
    res.status(200).json(itemsStocks)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
