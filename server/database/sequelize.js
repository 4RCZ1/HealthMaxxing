import * as pg from 'pg';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres.sjhuqckzmnpsxrbkbqcn:R5bcHbooPewNogXE@aws-0-eu-central-1.pooler.supabase.com:6543/postgres', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectModule: pg,
  logging: false,
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Database connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

// Sync all models
sequelize.sync({ force: false})
  .then(() => console.log('All models were synchronized successfully.'))
  .catch(error => console.error('An error occurred while synchronizing models:', error));

export default sequelize;