'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from_station: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stations',
          key: 'id'
        }
      },
      to_station: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stations',
          key: 'id'
        }
      },
      start_Time: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trips');
  }
};