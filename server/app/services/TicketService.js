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
    };

    async getAllTicketOfUser(userId) {
        const tickets = await ticketRepo.getAllTicketOfUser(userId);
        if (!tickets)
            return {
                status: 404,
                error: 1,
                message: 'ticket_not_found',
                data: null
            };
        return {
            status: 200,
            error: 0,
            message: 'list_tickets',
            data: tickets
        }
    };


}


module.exports = new TicketService();


