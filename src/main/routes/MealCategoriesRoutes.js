const Router = require('express')
const mealCategoryController = require('../controllers/MealCategoryController')

const router = Router()

router.post('/', mealCategoryController.createMealCategoryItem)
router.get('/', mealCategoryController.getMealCategories)
router.delete('/:id', mealCategoryController.deleteMealCategory)
router.put('/:id', mealCategoryController.updateCombinationItem)

module.exports = router
