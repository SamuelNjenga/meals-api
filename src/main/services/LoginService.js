const db = require('../db/models/index');

exports.getUser = async (data) => {
    return db.User.findOne(data);
};

exports.updateUser = async (data, root) => {
    return db.User.update(data, root);
};