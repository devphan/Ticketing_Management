const tripService = require("../services/TripService");

class TripController {
    async getAll(req, res) {
        const result = await tripService.getAll();
        res.status(result.status).send(result);
    };
    async getDetail(req, res) {
        let { id } = req.params;
        id = Number(id);
        const result = await tripService.getDetail(id);
        res.status(result.status).send(result);
    };

    async create(req, res) {
        const { fromStation, toStation, startTime, price } = req.body;
        const result = await tripService.create({ fromStation, toStation, startTime, price });
        res.status(result.status).send(result);
    };

    async update(req, res) {
        let { id } = req.params;
        id = Number(id);
        const { fromStation, toStation, startTime, price } = req.body;
        const result = await tripService.update({ id, fromStation, toStation, startTime, price });
        res.status(result.status).send(result);
    };

    async delete(req, res) {
        let { id } = req.params;
        id = Number(id);
        const result = await tripService.delete(id);
        res.status(result.status).send(result);
    }
}

module.exports = new TripController();