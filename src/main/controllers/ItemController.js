const itemService = require('../services/ItemService');
const ReqValidator = require('../utils/validator')

exports.createItem = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            itemTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            itemTitle: req.body.itemTitle
        };
        await itemService.createItem(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            itemTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            itemTitle: req.body.itemTitle
        };

        const itemId = req.params.id;
        await itemService.updateItem(data, {
            where: {
                id: itemId 
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteItem = async (req, res, next) => {
    try {
        const itemId = req.params.id;
        await itemService.deleteItem({
            where: {
                id: itemId
            }
        });
        res.status(200).json({
            data: null,
            message: `Item ${itemId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getItems = async (req, res) => {
    try {
        const items = await itemService.getItems();
        res.status(200).json(items);
    } catch (err) {
        res.json({
            message: err
        });
    }
};