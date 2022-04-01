const express = require("express");
const authCtrl = require("../controllers/AuthController");
const verifyToken = require('../middleware/auth/verifyToken');
const uploadImage = require("../middleware/upload/upload-image");
const authRouter = express.Router();

authRouter.post('/register', authCtrl.register);
authRouter.post('/login', authCtrl.login);
authRouter.post('/upload-avatar', verifyToken, uploadImage('avatar'), authCtrl.uploadAvatar);

module.exports = authRouter;
