const { Trip, Station } = require('../models');
class TripRepository {

    async getAll() {
        return await Trip.findAll({
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
        });
    };

    async getById(id) {
        return await Trip.findOne({ where: { id } });
    };

    async create({ fromStation, toStation, startTime, price }) {
        return await Trip.create({ fromStation, toStation, startTime, price });
    };

    async update({ id, fromStation, toStation, startTime, price }) {
        return await Trip.update({ fromStation, toStation, startTime, price },
            { where: { id } })
    };

    async delete(id) {
        return await Trip.destroy({ where: { id } })
    }
};





module.exports = new TripRepository();
