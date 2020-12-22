const Router = require('express');
const combinationItemController = require("../controllers/CombinationItemController");

const router = Router();

router.post('/', combinationItemController.createCombinationItem);
router.get('/', combinationItemController.getCombinationItems);
router.delete('/:id', combinationItemController.deleteCombinationItem);
router.put('/:id', combinationItemController.updateCombinationItem);

module.exports = router;