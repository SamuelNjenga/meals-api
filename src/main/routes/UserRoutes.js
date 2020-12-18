const Router = require('express');
const userController = require("../controllers/UserController");

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);

module.exports = router;