const Router = require('express');
//const UserRoutes = require('./UserRoutes');
const db = require('../db/models/index');
const {crud,sequelizeCrud} = require('express-sequelize-crud')

const router = Router();

const UserRoutes = require('./UserRoutes');
const LoginRoutes = require('./LoginRoutes');
const ItemRoutes = require('./ItemRoutes');
const AvailableItemsStockRoutes = require('./AvailableItemsStockRoutes');
const CombinationRoutes = require('./CombinationRoutes');
const CombinationItemRoutes = require('./CombinationItemRoutes')

router.use('/users', UserRoutes);
router.use('/login', LoginRoutes);
router.use('/items', ItemRoutes);
router.use('/combinations', CombinationRoutes);
router.use('/combinationItems', CombinationItemRoutes);
router.use('/availableItemsStock',AvailableItemsStockRoutes);

router.use(crud('/admin/items', sequelizeCrud(db.Item)))
router.use(crud('/admin/combinations', sequelizeCrud(db.Combination)))
router.use(crud('/admin/foodPreparations', sequelizeCrud(db.DailyFoodPreparation)))
router.use(crud('/admin/foodWastages', sequelizeCrud(db.DailyFoodWastage)))
router.use(crud('/admin/foodConsumptions', sequelizeCrud(db.DailyFoodConsumption)))
router.use(crud('/admin/combinationItems', sequelizeCrud(db.CombinationItem)))
router.use(crud('/admin/mealCategories', sequelizeCrud(db.MealCategory)))
router.use(crud('/admin/availableItems', sequelizeCrud(db.AvailableItemsStock)))
router.use(crud('/admin/suppliedItems', sequelizeCrud(db.SupplierItemsStock)))
// router.use(
//     crud('/admin/users', {
//       getList: ({ filter, limit, offset, order }) =>
//         User.findAndCountAll({ limit, offset, order, where: filter }),
//       getOne: id => User.findByPk(id),
//       create: body => User.create(body),
//       update: (id, body) => User.update(body, { where: { id } }),
//       destroy: id => User.destroy({ where: { id } }),
//     })
//   )

  //router.use(crud('/admin/accounts', sequelizeCrud(db.Account)))
  //router.use(crud('/admin/comments', sequelizeCrud(db.Comment)))
  // router.use(
  //   crud('/admin/accounts', {
  //     getList: ({ filter, limit, offset, order }) =>
  //       Account.findAndCountAll({ limit, offset, order, where: filter }),
  //     getOne: id => Account.findByPk(id),
  //     create: body => Account.create(body),
  //     update: (id, body) => Account.update(body, { where: { id } }),
  //     destroy: id => Account.destroy({ where: { id } }),
  //   })
  // )

module.exports = router;