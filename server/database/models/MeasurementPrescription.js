const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize.js');
const User = require('./User.js');
const Measurement = require('./Measurement.js');
class MeasurementPrescription extends Model {}

MeasurementPrescription.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  measurementId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Measurement,
      key: 'id'
    }
  },
  prescriptorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'MeasurementPrescription'
});

MeasurementPrescription.belongsTo(User, { as: 'User', foreignKey: 'userId' });
MeasurementPrescription.belongsTo(User, { as: 'Prescriptor', foreignKey: 'prescriptorId' });
MeasurementPrescription.belongsTo(Measurement, { foreignKey: 'measurementId' });

module.exports = MeasurementPrescription;
