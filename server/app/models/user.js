'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip, Ticket }) {
      // define association here
      this.belongsToMany(Trip, { through: 'tickets' });
      this.hasMany(Ticket, { foreignKey: 'userId' });
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};