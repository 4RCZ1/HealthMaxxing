const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize.js');
const User = require('./User.js');
const MeasurementPrescription = require('./MeasurementPrescription');

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

module.exports = MeasurementTake;
