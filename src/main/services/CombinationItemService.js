const db = require('../db/models/index');

exports.createCombinationItem = async (data) => {
    return db.CombinationItem.create(data);
};

exports.updateCombinationItem = async (data, root) => {
    return db.CombinationItem.update(data, root);
};

exports.getCombinationItems = async () => {
    return db.CombinationItem.findAll();
};

exports.deleteCombinationItem = async (data) => {
    return db.CombinationItem.destroy(data);
};