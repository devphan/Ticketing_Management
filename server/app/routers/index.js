const express = require('express');
const authRouter = require('./auth.router');
const stationRouter = require('./station.router');
const ticketRouter = require('./ticket.router');
const tripRouter = require('./trip.router');
// const rootRouter = express.Router();
const rootRouter = require('express-promise-router')();

rootRouter.use('/auth', authRouter);
rootRouter.use('/stations', stationRouter);
rootRouter.use('/trips', tripRouter);
rootRouter.use('/tickets', ticketRouter);

module.exports = rootRouter;
