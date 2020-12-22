const combinationItemService = require('../services/CombinationItemService');
const ReqValidator = require('../utils/validator')

exports.createCombinationItem = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            combinationId: 'required|integer',
            itemId: 'required|integer',
            itemRatio: 'required'
        })
        if (!valid) return
        const data = {
            combinationId: req.body.combinationId,
            itemId: req.body.itemId,
            itemRatio: req.body.itemRatio
        };
        await combinationItemService.createCombinationItem(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCombinationItem = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            combinationId: 'required|integer',
            itemId: 'required|integer',
            itemRatio: 'required'
        })
        if (!valid) return
        const data = {
            combinationId: req.body.combinationId,
            itemId: req.body.itemId,
            itemRatio: req.body.itemRatio
        };

        const combinationItemId = req.params.id;
        await combinationItemService.updateCombinationItem(data, {
            where: {
                id: combinationItemId 
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteCombinationItem = async (req, res, next) => {
    try {
        const combinationItemId = req.params.id;
        await combinationItemService.deleteCombinationItem({
            where: {
                id: combinationItemId
            }
        });
        res.status(200).json({
            data: null,
            message: `CombinationItem ${combinationItemId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getCombinationItems = async (req, res) => {
    try {
        const combinationItems = await combinationItemService.getCombinationItems();
        res.status(200).json(combinationItems);
    } catch (err) {
        res.json({
            message: err
        });
    }
};