const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    console.log({ token });
    if (!token)
        return next({
            status: 401,
            error: 1,
            message: 'Invalid_token',
            data: null
        });
    try {
        req.payload = jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (error) {
        return next({
            status: 401,
            error: 1,
            message: error.message,
            data: null
        });
    }
}
