const express = require('express');
const multer = require('multer')
const upload = multer()
const UserController = require('../controller/userController')
const router = express.Router();

const userController = new UserController();

router.get('/index', upload.none(), userController.getAll)

module.exports = router;