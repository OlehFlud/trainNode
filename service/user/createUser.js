const dataBase = require('../../dataBase').getInstance();

module.exports = async registerData  => {
    const UserModel = dataBase.getModel('User');
    const createUser = await UserModel.create(registerData );
    return createUser && createUser.dataValues;
};
