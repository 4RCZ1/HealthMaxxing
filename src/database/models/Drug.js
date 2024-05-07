import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import User from './User.js';

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

export default Drug;