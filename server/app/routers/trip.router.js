const express = require('express');
const tripCtrl = require('../controllers/TripController');
const tripRouter = express.Router();


tripRouter.get('/', tripCtrl.getAll);
tripRouter.get('/:id', tripCtrl.getDetail);
tripRouter.post('/', tripCtrl.create);
tripRouter.put('/:id', tripCtrl.update);
tripRouter.delete('/:id', tripCtrl.delete);




module.exports = tripRouter;

