const combinationService = require('../services/CombinationService');
const ReqValidator = require('../utils/validator')

exports.createCombination = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            combinationTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            combinationTitle: req.body.combinationTitle
        };
        await combinationService.createCombination(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCombination = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            combinationTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            combinationTitle: req.body.combinationTitle
        };

        const combinationId = req.params.id;
        await combinationService.updateCombination(data, {
            where: {
                id: combinationId 
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteCombination = async (req, res, next) => {
    try {
        const combinationId = req.params.id;
        await combinationService.deleteCombination({
            where: {
                id: combinationId
            }
        });
        res.status(200).json({
            data: null,
            message: `Combination ${combinationId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getCombinations = async (req, res) => {
    try {
        const combinations = await combinationService.getCombinations();
        res.status(200).json(combinations);
    } catch (err) {
        res.json({
            message: err
        });
    }
};