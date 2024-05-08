import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import User from './User.js';
import Drug from './Drug.js';

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

export default DrugPrescription;