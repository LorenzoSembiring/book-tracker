const bcrypt = require("bcrypt");
const User = require('../model/User');

class authService {
    async register(username, email, password, role) {
        const hashedPassword = await bcrypt.hash(password, 10);

        return User.insert(email, username, hashedPassword);
        const created = await User.insert(email, username, hashedPassword, role);
    }
}

module.exports = authService;