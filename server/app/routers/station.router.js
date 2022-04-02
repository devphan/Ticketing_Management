const express = require('express');
const stationCtrl = require('../controllers/StationController');
const authen = require('../middleware/auth/authenticate');
const author = require('../middleware/auth/authorize');
// const stationRouter = express.Router();
const stationRouter = require('express-promise-router')();

stationRouter.get('/', stationCtrl.getAll);

//author & authen
stationRouter.use(authen, author);

stationRouter.post('/', stationCtrl.create);
stationRouter.put('/:id', stationCtrl.update);
stationRouter.delete('/:id', stationCtrl.delete);


module.exports = stationRouter;
