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
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLen(value) {
          if (value.length < 5)
            throw new Error('The full name length should more than 5 characters');
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
      }
    },
    avatar: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'client'
    },
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};