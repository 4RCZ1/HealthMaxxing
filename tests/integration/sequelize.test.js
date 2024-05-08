import {describe, it, expect} from "vitest";
import sequelize from "../../src/database/sequelize";
import {Drug} from "../../src/database/models";


describe('Sequelize', () => {
  it('should connect to the database', async () => {
    await sequelize.authenticate();
    expect(sequelize).toBeDefined();
  });
  it.skip('should synchronize all models', async () => {
    await sequelize.sync({ force: false });
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