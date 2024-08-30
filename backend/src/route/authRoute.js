const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer()

const AuthController = require('../controller/authController')
const authController = new AuthController();

router.post('/register', upload.none(), authController.register)

module.exports = router;