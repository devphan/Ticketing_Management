const tripRepo = require('../repositories/TripRepository');


class TripService {

    async getAll() {
        const tripList = await tripRepo.getAll();
        if (!tripList)
            return {
                status: 404,
                error: 1,
                message: 'trip_not_found',
                data: null
            };
        return {
            status: 200,
            error: 0,
            message: 'trip_list',
            data: tripList
        };
    };

    async getDetail(id) {
        const trip = await tripRepo.getById(id);
        if (!trip)
            return {
                status: 404,
                error: 1,
                message: 'trip_not_found',
                data: null
            };
        return {
            status: 200,
            error: 0,
            message: 'trip_detail',
            data: trip
        };
    };

    async create({ fromStation, toStation, startTime, price }) {
        const trip = await tripRepo.create({ fromStation, toStation, startTime, price });
        if (!trip)
            return {
                status: 500,
                error: 1,
                message: 'create_trip_failed',
                data: null
            };

        return {
            status: 200,
            error: 0,
            message: 'create_success',
            data: trip
        };

    };

    async update({ id, fromStation, toStation, startTime, price }) {
        let trip = await tripRepo.getById(id);
        if (!trip)
            return {
                status: 404,
                error: 1,
                message: 'trip_not_found',
                data: null
            };
        await tripRepo.update({ id, fromStation, toStation, startTime, price });
        trip = await tripRepo.getById(id);
        return {
            status: 200,
            error: 0,
            message: 'update_success',
            data: trip
        };
    };

    async delete(id) {
        const trip = await tripRepo.getById(id);
        if (!trip)
            return {
                status: 404,
                error: 1,
                message: 'trip_not_found',
                data: null
            };

        tripRepo.delete(id);
        return {
            status: 200,
            error: 0,
            message: 'delete_success',
            data: trip
        };
    };

}

module.exports = new TripService();
