const express = require("express");
const authCtrl = require("../controllers/AuthController");
const authen = require('../middleware/auth/authenticate');
const uploadImage = require("../middleware/upload/upload-image");
// const authRouter = express.Router();
const authRouter = require('express-promise-router')();;

authRouter.post('/register', authCtrl.register);
authRouter.post('/login', authCtrl.login);
authRouter.post('/upload-avatar', authen, uploadImage('avatar'), authCtrl.uploadAvatar);

module.exports = authRouter;
