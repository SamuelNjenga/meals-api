const Router = require('express');
const itemController = require("../controllers/ItemController");

const router = Router();

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.delete('/:id', itemController.deleteItem);
router.put('/:id', itemController.updateItem);

module.exports = router;