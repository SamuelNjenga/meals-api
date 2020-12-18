const db = require('../db/models/index');

exports.createItem = async (data) => {
    return db.Item.create(data);
};

exports.updateItem = async (data, root) => {
    return db.Item.update(data, root);
};

exports.getItems = async () => {
    return db.Item.findAll();
};

exports.deleteItem = async (data) => {
    return db.Item.destroy(data);
};