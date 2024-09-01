const bcrypt = require("bcrypt");
const User = require('../model/User');

class authService {
    async register(username, email, password, role) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const emailExisted = await User.select({email: email});
        const usernameExisted = await User.select({username: username});

        if(emailExisted[0]) {
            return "email existed"
        }

        if(usernameExisted[0]) {
            return "username existed"
        }

        const created = await User.insert(email, username, hashedPassword, role);
        return User.select({id: created[0]})
    }
}

module.exports = authService;