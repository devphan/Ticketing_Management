const express = require('express'); 
const ticketCtrl = require('../controllers/TicketController');
const verifyToken = require('../middleware/auth/verifyToken');
const ticketRouter = express.Router();

ticketRouter.get('/', verifyToken, ticketCtrl.getAllByUser)
ticketRouter.post('/', verifyToken ,ticketCtrl.buy);

module.exports = ticketRouter;
