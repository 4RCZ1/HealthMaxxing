const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  exp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'patient'
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
