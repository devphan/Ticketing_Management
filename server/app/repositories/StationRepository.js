const { Op, where } = require('sequelize');
const { Station } = require('../models')
class StationRepository {
    async getAll() {
        return await Station.findAll();
    };

    async getById(id) {
        return await Station.findOne({ where: { id } });
    }

    async getByName(name) {
        return await Station.findOne({
            where: { name }
        })
    }

    async search(name) {
        return await Station.findAll({
            where: {
                name: { [Op.like]: `%${name}%` }
            }
        });
    };

    async create({ name, address, province }) {
        return await Station.create({ name, address, province });
    };

    async update({ id, name, address, province }) {
        return await Station.update({ name, address, province }, {
            where: { id }
        });
    };

    async delete(id) {
        return await Station.destroy({ where: { id } });
    }


}


module.exports = new StationRepository();
