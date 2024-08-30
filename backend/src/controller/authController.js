const AuthService = require('../service/authService')

const authService = new AuthService();

class authController{
    register = async(req, res, next) => {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        try {
            const register = await authService.register(username, email, password);
            
            res.status(200).json({
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