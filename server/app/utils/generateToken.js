const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = user => {
    const payload = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        type: user.type
    }
    return jwt.sign(payload, process.env.TOKEN_SECRET);
}
