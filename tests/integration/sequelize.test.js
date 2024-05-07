import {describe, it, expect} from "vitest";
import sequelize from "../../src/database/sequelize";

describe('Sequelize', () => {
  it('should connect to the database', async () => {
    await sequelize.authenticate();
    expect(sequelize).toBeDefined();
  });
  it.skip('should synchronize all models', async () => {
    await sequelize.sync({ force: true });
    expect(sequelize).toBeDefined();
  });
})