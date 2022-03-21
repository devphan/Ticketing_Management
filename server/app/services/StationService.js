const stationRepo = require("../repositories/StationRepository");

class StationService {
    async getAll() {
        const stationList = await stationRepo.getAll();
        if (!stationList)
            return {
                status: 404,
                error: 1,
                message: 'station_not_found',
                data: null
            }
        return {
            status: 200,
            error: 0,
            message: 'station_list',
            data: stationList
        }
    };
    async search(name) {
        const stationList = await stationRepo.search(name);
        if (!stationList)
            return {
                status: 404,
                error: 1,
                message: 'station_not_found',
                data: null
            }
        return {
            status: 200,
            error: 0,
            message: 'station_list',
            data: stationList
        }
    };
    async create({ name, address, province }) {
        //station check existed
        let station = await stationRepo.getByName(name);
        if (station && name === station.name)
            return {
                status: 400,
                error: 1,
                message: 'station_is_existed',
                data: null
            }

        station = await stationRepo.create({ name, address, province });
        if (!station)
            return {
                status: 500,
                error: 1,
                message: 'create_station_failed',
                data: null
            }
        return {
            status: 200,
            error: 0,
            message: 'create_station_success',
            data: station
        }
    };

    async update({ id, name, address, province }) {
        let station = await stationRepo.getById(id);
        if (!station)
            return {
                status: 404,
                error: 1,
                message: 'station_not_found',
                data: null
            }
        const stationUpdated = await stationRepo.update({ id, name, address, province });

        if (stationUpdated.toString() === '0')
            return {
                status: 500,
                error: 1,
                message: 'update_station_failed',
                data: null
            }
        station = await stationRepo.getById(id);
        return {
            status: 200,
            error: 0,
            message: 'update_station_success',
            data: station
        }
    }

    async delete(id) {
        const station = await stationRepo.getById(id);
        if (!station)
            return {
                status: 404,
                error: 1,
                message: 'station_not_found',
                data: null
            }
        const stationDeleted = await stationRepo.delete(id);
        if (stationDeleted < 1)
            return {
                status: 500,
                error: 1,
                message: 'delete_station_failed',
                data: null
            }
        return {
            status: 200,
            error: 0,
            message: 'delete_station_success',
            data: station
        }
    }

}


module.exports = new StationService();
