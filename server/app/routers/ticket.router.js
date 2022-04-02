const express = require('express');
const ticketCtrl = require('../controllers/TicketController');
const authen = require('../middleware/auth/authenticate');
// const ticketRouter = express.Router();
const ticketRouter = require('express-promise-router')();

ticketRouter.use(authen);

ticketRouter.get('/', ticketCtrl.getAllByUser)
ticketRouter.post('/', ticketCtrl.buy);

module.exports = ticketRouter;
