const db = require('../db/models/index');

exports.createCombination = async (data) => {
    return db.Combination.create(data);
};

exports.updateCombination = async (data, root) => {
    return db.Combination.update(data, root);
};

exports.getCombinations = async () => {
    return db.Combination.findAll();
};

exports.deleteCombination = async (data) => {
    return db.Combination.destroy(data);
};