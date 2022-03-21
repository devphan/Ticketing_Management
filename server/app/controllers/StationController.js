const stationService = require("../services/StationService");

class StationController {
    async getAll(req, res) {
        const { name } = req.query;
        let result = await stationService.getAll();
        if (name) {
            result = await stationService.search(name);
        }
        res.status(result.status).send(result);
    };
    async create(req, res) {
        const { name, address, province } = req.body;
        const result = await stationService.create({ name, address, province });
        res.status(result.status).send(result);
    };
    async update(req, res) {
        let { id } = req.params;
        id = Number(id);
        const { name, address, province } = req.body;
        const result = await stationService.update({ id, name, address, province });
        res.status(result.status).send(result);
    };

    async delete(req, res) {
        let { id } = req.params;
        id = Number(id);
        const result = await stationService.delete(id);
        res.status(result.status).send(result);
    };

}

module.exports = new StationController();
