const { Ticket } = require('../models');


class TicketRepository {
    async buy({ userId, tripId }) {
        return await Ticket.create({ userId, tripId });
    };

    async getAllTicketOfUser(userId) {
        return await Ticket.findAll({ where: { userId } });
    }

}

module.exports = new TicketRepository();
