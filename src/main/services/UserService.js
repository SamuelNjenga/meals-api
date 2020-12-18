const db = require('../db/models/index');

exports.createUser = async (data) => {
    return db.User.create(data);
};

exports.updateUser = async (data, root) => {
    return db.User.update(data, root);
};

exports.getUsers = async () => {
    return db.User.findAll();
};

exports.deleteUser = async (data) => {
    return db.User.destroy(data);
};