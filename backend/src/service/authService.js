const bcrypt = require("bcrypt");
const User = require('../model/User');

class authService {
    async register(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);

        return User.insert(email, username, hashedPassword);
    }
}

module.exports = authService;