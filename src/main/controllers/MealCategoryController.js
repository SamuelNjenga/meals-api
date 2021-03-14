const mealCategoryService = require('../services/MealCategoryService')
const ReqValidator = require('../utils/validator')

exports.createMealCategoryItem = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      categoryTitle: 'required|string'
    })
    if (!valid) return
    const data = {
      categoryTitle: req.body.categoryTitle
    }
    await mealCategoryService.createMealCategory(data)
    res.status(201).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.updateCombinationItem = async (req, res) => {
  try {
    const valid = await ReqValidator.validate(req, res, {
      categoryTitle: 'required|string'
    })
    if (!valid) return
    const data = {
      categoryTitle: req.body.categoryTitle
    }

    const categoryId = req.params.id
    await mealCategoryService.updateMealCategory(data, {
      where: {
        id: categoryId
      }
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
}

exports.deleteMealCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id
    await mealCategoryService.deleteMealCategory({
      where: {
        id: categoryId
      }
    })
    res.status(200).json({
      data: null,
      message: `MealCategory ${categoryId} has been deleted`
    })
  } catch (error) {
    next(error)
  }
}

exports.getMealCategories = async (req, res) => {
  try {
    const mealCategories = await mealCategoryService.getMealCategories()
    res.status(200).json(mealCategories)
  } catch (err) {
    res.json({
      message: err
    })
  }
}
