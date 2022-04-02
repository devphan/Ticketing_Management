'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: 'fromStation', as: 'from' });
      this.hasMany(Trip, { foreignKey: 'toStation' });
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLen(value) {
          if (value.length < 5)
            throw new Error('The name length should more than 5 characters');
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLen(value) {
          if (value.length < 10)
            throw new Error('The address length should more than 10 characters');
        }
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLen(value) {
          if (value.length < 5)
            throw new Error('The province length should more than 5 characters');
        }
      }
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Station',
  });
  return Station;
};