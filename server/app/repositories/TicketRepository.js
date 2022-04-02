const { Ticket, Trip, User, Station } = require('../models');


class TicketRepository {
    async buy({ userId, tripId }) {
        return await Ticket.create({ userId, tripId });
    };

    async getAllTicketOfUser(userId) {
        return await Ticket.findAll({
            include: [
                {
                    model: Trip,
                    attributes: { exclude: ['password'] },
                    include: [
                        {
                            model: Station,
                            as: 'from'
                        },
                        {
                            model: Station,
                            as: 'to'
                        }
                    ]
                },
                {
                    model: User,
                    attributes: { exclude: ['password'] }
                }

            ],
            where: { userId }
        });
    }

}

module.exports = new TicketRepository();
