const express = require('express');
const tripCtrl = require('../controllers/TripController');
const authen = require('../middleware/auth/authenticate');
const author = require('../middleware/auth/authorize');
// const tripRouter = express.Router();
const tripRouter = require('express-promise-router')()

tripRouter.get('/', tripCtrl.getAll);
tripRouter.get('/:id', tripCtrl.getDetail);

//author & authen
tripRouter.use(authen, author);

tripRouter.post('/', tripCtrl.create);
tripRouter.put('/:id', tripCtrl.update);
tripRouter.delete('/:id', tripCtrl.delete);




module.exports = tripRouter;

