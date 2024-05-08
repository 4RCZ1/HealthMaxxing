import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import User from './User.js';
import DrugPrescription from "./DrugPrescription";

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

export default DrugTake;