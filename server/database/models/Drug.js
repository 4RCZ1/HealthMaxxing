const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');


class Drug extends Model {}

Drug.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dose: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Drug'
});

module.exports = Drug;
