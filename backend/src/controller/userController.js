const User = require('../model/User');

class UserController {
    getAll = async(req, res, next) => {
        const data = await User.getAll()

        res.status(200).json({ data: data })
    }
    
}
module.exports = UserController