const express = require('express'); 
const ticketCtrl = require('../controllers/TicketController');
const verifyToken = require('../middleware/verifyToken');
const ticketRouter = express.Router();

ticketRouter.post('/', verifyToken ,ticketCtrl.create);

module.exports = ticketRouter;
