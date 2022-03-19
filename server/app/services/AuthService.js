const userRepo = require("../repositories/UserRepository");


class AuthService {
    async register({ fullName, email, password, phone, avatar }) {
        const userFind = await userRepo.findByEmail(email);
        if (userFind)
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

}


module.exports = new AuthService();
