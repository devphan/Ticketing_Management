const express = require('express');
const stationCtrl = require('../controllers/StationController');
const stationRouter = express.Router();

stationRouter.get('/', stationCtrl.getAll);
stationRouter.post('/', stationCtrl.create);
stationRouter.put('/:id', stationCtrl.update);
stationRouter.delete('/:id', stationCtrl.delete);


module.exports = stationRouter;
