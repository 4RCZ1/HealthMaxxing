const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');
const User = require('./User.js');
const DrugPrescription = require("./DrugPrescription");

class DrugTake extends Model {}

DrugTake.init({
  drugPrescriptionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DrugPrescription,
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
  }
}, {
  sequelize,
  modelName: 'DrugTake'
});

DrugTake.belongsTo(DrugPrescription, { foreignKey: 'drugId' });
DrugPrescription.belongsTo(User, { foreignKey: 'userId' });

module.exports = DrugTake;
