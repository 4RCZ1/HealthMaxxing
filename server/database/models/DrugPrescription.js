const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');
const User = require('./User.js');
const Drug = require('./Drug.js');

class DrugPrescription extends Model {}

DrugPrescription.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  drugId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Drug,
      key: 'id'
    }
  },
  prescriptorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  takeHour: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'DrugPrescription'
});

DrugPrescription.belongsTo(User, { as: 'User', foreignKey: 'userId' });
DrugPrescription.belongsTo(User, { as: 'Prescriptor', foreignKey: 'prescriptorId' });
DrugPrescription.belongsTo(Drug, { foreignKey: 'drugId' });

module.exports = DrugPrescription;
