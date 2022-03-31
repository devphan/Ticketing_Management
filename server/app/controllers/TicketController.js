const ticketService = require("../services/TicketService");


class TicketController {
    async create(req, res) {
        const { tripId } = req.body;
        const result = await ticketService.buy({ userId: req.payload.id, tripId });
        return res.status(result.status).json(result);
    }
}

module.exports = new TicketController();
