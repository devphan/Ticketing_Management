const authService = require("../services/AuthService");

class AuthController {
    async register(req, res) {
        const {fullName, email, password, phone, avatar} = req.body;
        const result = await authService.register({fullName, email, password, phone, avatar});
        return res.status(result.status).send(result)
    }
}

module.exports = new AuthController();
