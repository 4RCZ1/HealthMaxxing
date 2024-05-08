import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  exp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'patient'
  }
}, {
  sequelize,
  modelName: 'User'
});

export default User;