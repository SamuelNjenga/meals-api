const Router = require('express');
const combinationController = require("../controllers/CombinationController");

const router = Router();

router.post('/', combinationController.createCombination);
router.get('/', combinationController.getCombinations);
router.delete('/:id', combinationController.deleteCombination);
router.put('/:id', combinationController.updateCombination);

module.exports = router;