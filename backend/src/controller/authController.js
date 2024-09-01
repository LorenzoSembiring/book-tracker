const AuthService = require('../service/authService')

const authService = new AuthService();

class authController{
    register = async(req, res, next) => {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        try {
            const register = await authService.register(username, email, password, "user");
            
            if (typeof register == String) {
                res.status(409).json({
                    code: 409,
                    status: "conflict",
                    message: register
                })
            }
            res.status(201).json({
                code: 201,
                status: "created",
                data: register
            })
        } catch (error) {
            res.status(500).json({
                code: 500,
                status: "error",
                message: error
            })
            
        }

    }
}

module.exports = authController;