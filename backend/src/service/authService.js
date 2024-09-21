const bcrypt = require("bcrypt");
const User = require('../model/User');
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
        return {status: "created", data: await User.select({id: created[0]})}
    async login(email, password) {
        try {
            const user = await User.select({ email: email });
            
            if (!user[0]) {
                return { code: 404, status: 'not found', data: { message: "email not existed" } };
            }

            console.log(user[0])

            const token = jwt.sign({ data: {id: user[0].id, username: user[0].username, role: user[0].role} }, process.env.JWT_SECRET);
    
            if (await bcrypt.compare(password, user[0].password)) {
                return {
                    code: 200,
                    status: 'success',
                    data: {
                        user: {
                            username: user[0].username,
                            picture: user[0].picture
                        },
                        token: token
                    }
                };
            } else {
                return { code: 401, status: 'unauthorized', data: { message: 'Invalid password' } };
            }
        } catch (error) {
            return { code: 500, status: 'error', data: { message: error.message } };
        }
    }
}

module.exports = authService;
