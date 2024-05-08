import {Model, DataTypes} from 'sequelize';
import sequelize from '../sequelize.js';
import User from './User.js';
import MeasurementPrescription from './MeasurementPrescription';

class MeasurementTake extends Model {
}

MeasurementTake.init({
  measurementPrescriptionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: MeasurementPrescription,
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  timeTaken: {
    type: DataTypes.DATE,
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'MeasurementTake'
});

MeasurementTake.belongsTo(MeasurementPrescription, {foreignKey: 'measurementId'});
MeasurementPrescription.belongsTo(User, {foreignKey: 'userId'});

export default MeasurementTake;