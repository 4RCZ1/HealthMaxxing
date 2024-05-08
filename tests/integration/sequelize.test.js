import {describe, it, expect} from "vitest";
const sequelize = require('../../server/database/sequelize');
const {Drug} = require('../../server/database/models');
const User = require('../../server/database/models');
const DrugPrescription = require('../../server/database/models');
const DrugTake = require('../../server/database/models');
const Measurement = require('../../server/database/models');
const MeasurementPrescription = require('../../server/database/models');
const MeasurementTake = require('../../server/database/models');


describe('Sequelize', () => {
  it('should connect to the database', async () => {
    await sequelize.authenticate();
    expect(sequelize).toBeDefined();
  });
  it.skip('should synchronize all models', async () => {
    await sequelize.sync({ force: true });
    expect(sequelize).toBeDefined();
  });
  it('should create new drug', async () => {
    const drug = {
      name: 'test-drug',
      dose: 500
    };
    await Drug.destroy({ where: { name: drug.name } });
    await Drug.create(drug);
    const allDrugs = await Drug.findAll(
      {
        attributes: ['name', 'dose'],
        raw: true
      }
    );
    expect(allDrugs).toContainEqual(drug);
  })
})