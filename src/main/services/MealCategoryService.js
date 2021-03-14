const db = require('../db/models/index')

exports.createMealCategory = async data => {
  return db.MealCategory.create(data)
}

exports.updateMealCategory = async (data, root) => {
  return db.MealCategory.update(data, root)
}

exports.getMealCategories = async () => {
  return db.MealCategory.findAll()
}

exports.deleteMealCategory = async data => {
  return db.MealCategory.destroy(data)
}
