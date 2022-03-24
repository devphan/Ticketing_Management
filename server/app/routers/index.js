const express = require('express');
const authRouter = require('./auth.router');
const stationRouter = require('./station.router');
const tripRouter = require('./trip.router');
const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/stations', stationRouter);
rootRouter.use('/trips', tripRouter);

module.exports = rootRouter;
