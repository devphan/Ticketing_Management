const { Ticket } = require('../models');


class TicketRepository {
    async buy({ userId, tripId }) {
        return await Ticket.create({ userId, tripId });
    };

}

module.exports = new TicketRepository();
