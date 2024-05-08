const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize.js');

class Measurement extends Model {}

Measurement.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  max: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  min: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Measurement'
});

module.exports = Measurement;
