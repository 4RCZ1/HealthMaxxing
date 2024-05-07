import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

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

export default Measurement;