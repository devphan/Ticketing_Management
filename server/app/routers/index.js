const express = require('express'); 
const authRouter = require('./auth.router');
const stationRouter = require('./station.router');
const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/stations', stationRouter);

module.exports = rootRouter;
