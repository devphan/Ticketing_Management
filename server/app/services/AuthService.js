const userRepo = require("../repositories/UserRepository");
const checkPassword = require("../utils/checkPassword");
const generateToken = require("../utils/generateToken");


class AuthService {
    async register({ fullName, email, password, phone, avatar }) {
        const user = await userRepo.findByEmail(email);
        if (user)
            return {
                status: 400,
                error: 1,
                message: 'email_is_existed',
                data: null
            };
        const newUser = await userRepo.register({ fullName, email, password, phone, avatar });
        if (!newUser)
            return {
                status: 500,
                error: 1,
                message: 'create_user_failed',
                data: null
            };
        return {
            status: 201,
            error: 1,
            message: 'created_user_success',
            data: newUser
        };
    }

    async login({ email, password }) {
        const user = await userRepo.findByEmail(email);
        if (!user)
            return {
                status: 400,
                error: 1,
                message: 'email_not_found_or_password_incorrect',
                data: null
            };
        if (!checkPassword(password, user.password))
            return {
                status: 400,
                error: 1,
                message: 'email_not_found_or_password_incorrect',
                data: null
            }
        const token = generateToken(user);
        return {
            status: 200,
            error: 0,
            message: 'login_success',
            data: token
        }
    };



}


module.exports = new AuthService();
