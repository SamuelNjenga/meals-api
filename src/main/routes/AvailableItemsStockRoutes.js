const Router = require('express')
const itemsStockController = require('../controllers/AvailableItemsStockController')

const router = Router()

router.post('/', itemsStockController.createAvailableItemsStock)
router.get('/', itemsStockController.getAvailableItemsStocks)
router.delete('/:id', itemsStockController.deleteAvailableItemsStock)
router.put('/:id', itemsStockController.updateAvailableItemsStock)

module.exports = router
