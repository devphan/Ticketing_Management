const ticketService = require("../services/TicketService");


class TicketController {
    async buy(req, res) {
        const { tripId } = req.body;
        const result = await ticketService.buy({ userId: req.payload.id, tripId });
        return res.status(result.status).json(result);
    }
    async getAllByUser(req, res) {
        console.log(req.payload.id);
        const result = await ticketService.getAllTicketOfUser(req.payload.id);
        return res.status(result.status).json(result);
    }
}

module.exports = new TicketController();
