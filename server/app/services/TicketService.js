const ticketRepo = require("../repositories/TicketRepository");


class TicketService {
    async buy({ userId, tripId }) {
        const ticket = await ticketRepo.buy({ userId, tripId });
        if (!ticket)
            return {
                status: 500,
                error: 1,
                message: 'create_ticket_failed',
                data: null
            };
        return {
            status: 201,
            error: 0,
            message: 'create_success',
            data: ticket
        }
    }
}

module.exports = new TicketService();


