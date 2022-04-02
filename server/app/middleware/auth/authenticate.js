const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req, res, next) => {
    try {
        const token = req.header('token');
        if (!token)
            return next({
                status: 401,
                error: 1,
                message: 'Require_login',
                data: null
            });
        req.payload = jwt.verify(token, process.env.TOKEN_SECRET); //decoded
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
