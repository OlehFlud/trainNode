const { authService } = require('../../service');
const { tokinazer } = require('../../helpers');

module.exports = async ( req, res, next) => {
    try {
        const {  email, password } = req.body;

        const checkLoginUser = await authService.loginUser( email, password);

        if (!checkLoginUser) {
            throw new Error('Incorrect data')
        }

        const token = tokinazer(checkLoginUser.dataValues);

        // req.tokens = token;
        res.json(token);
        next();


    } catch (e) {
        res.status(400).json(e.message);
    }
};
