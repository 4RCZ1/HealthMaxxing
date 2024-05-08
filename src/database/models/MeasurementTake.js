import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import User from './User';
import Measurement from './Measurement';

const MeasurementTake = sequelize.define('MeasurementTake', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  takenAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

MeasurementTake.belongsTo(User, { foreignKey: 'userId', as: 'user' });
MeasurementTake.belongsTo(Measurement, { foreignKey: 'measurementId', as: 'measurement' });

export default MeasurementTake;