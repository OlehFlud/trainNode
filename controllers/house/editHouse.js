module.exports = async (req, res) => {
    try {

        const parameters = req.body;

        const {house_id} = req.body;

        const dataBase = require('../../dataBase').getInstance();

        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(parameters, {
            where: {
                id: house_id
            }
        });
        res.json('House was edited');

    } catch (e) {
        res.status(400).json(e.message);
    }
};
