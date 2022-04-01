const { User } = require('../models');
const hashPassword = require('../utils/hashPassword');
class UserRepository {
    async findByEmail(email) {
        return await User.findOne({ where: { email } });
    };

    async register({ fullName, email, password, phone, avatar }) {
        return User.create({
            fullName, email, password: hashPassword(password), phone, avatar
        });
    };


    async uploadAvatar({ email, avatar }) {
        return await User.update({ avatar }, {
            where: { email }
        });
    }

}

module.exports = new UserRepository();
