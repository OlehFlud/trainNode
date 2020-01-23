const jwt = require('jsonwebtoken');
const {JWT_SECRET, JWT_REFRESH} = require('../config/config');

module.exports = (data) => {
    const access_token = jwt.sign(data, JWT_SECRET, {expiresIn: '10m'});
    const refresh_token = jwt.sign(data, JWT_REFRESH, {expiresIn: '24h'});

    const tokens = {
        access_token,
        refresh_token
    };

    if (!tokens) throw new Error('Tokens was no created');
    return tokens;
};
