const JWTService = require('./JwtService');
const Drug = require('../database/models/Drug');
const User = require('../database/models/User');
const DrugPrescription = require('../database/models/DrugPrescription');
const DrugTake = require('../database/models/DrugTake');



const validator = (target, requiredProperties) => {
  return requiredProperties.filter(property => !target[property]);
}

class DrugsService {

  constructor() {
    this.jwtService = new JWTService('100pa');

  }
  async addDrugPrescription(drug, token) {
    if (validator(drug, ['name', 'frequency', 'dosage']).length > 0) {
      return {
        error: `missing required fields: ${validator(drug, ['name', 'frequency', 'dosage']).join(', ')}`
      }
    }

    let drugId = (await Drug.findAll({
      where: {
        name: drug.name
      },
      attributes: ['id']
    }))[0]?.id;

    if (!drugId) {
      if (validator(drug, ['dose']).length > 0) {
        return {
          error: `missing required fields: ${validator(drug, ['dose']).join(', ')}`
        }
      }
      await Drug.create(drug);
      drugId = (await Drug.findAll({
        where: {
          name: drug.name
        },
        attributes: ['id']
      }))[0]?.id;
    }

    const userId = this.jwtService.getUserId(token);
    if (drug.userId && drug.userId !== userId) {
      if (drug.prescriptorId && drug.prescriptorId !== userId) {
        return {
          error: 'Not authorized'
        }
      }
      drug.prescriptorId = userId;
    }

    await DrugPrescription.create({
      userId: drug.userId || userId,
      drugId: drugId,
      prescriptorId: drug.prescriptorId,
      frequency: drug.frequency,
      takeHours: drug.takeHours
    });
    return {drugId};
  }

  async takeDrug(prescriptionId, token) {
    const userId = this.jwtService.getUserId(token);
    const drugPrescription = await DrugPrescription.findByPk(prescriptionId);
    if (!drugPrescription) {
      return {
        error: 'Prescription not found'
      };
    }

    if (userId !== drugPrescription.userId) {
      return {
        error: 'Not authorized'
      };
    }

    return DrugTake.create({
      drugPrescriptionId: prescriptionId,
      userId: userId,
      timeTaken: new Date()
    });
  }

  async getDrugTakeHistory(token) {
    const userId = this.jwtService.getUserId(token);
    return DrugTake.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: DrugPrescription,
          as: 'DrugPrescription',
          include: [
            {
              model: Drug,
              as: 'Drug'
            }
          ]
        }
      ],
    });
  }

  async getUserPrescriptions(token) {
    const userId = this.jwtService.getUserId(token);
    return DrugPrescription.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: Drug,
          as: 'Drug',
        },
        {
          model: User,
          as: 'Prescriptor'
        }
      ],
      raw: true
    });
  }

  async getClosestPrescription(token) {
    const allUserPrescriptions = await this.getUserPrescriptions(token);
    const currentHour = new Date().getHours();
    
    let closestPrescription 
    let closestHour = 100;
    allUserPrescriptions.forEach(prescription => {
      prescription.takeHours.hours.forEach(hour => {
        closestPrescription = hour - currentHour < closestHour - currentHour ? prescription : closestPrescription;
        closestHour = hour - currentHour < closestHour - currentHour ? hour : closestHour;
      });
    })


    return {closestPrescription, closestHour};
  }

  async getDrug(id, token) {

    const drug = this.db.Drug.findByPk(id);
    try {
      const expectedUserId = drug.userId
      const decodedToken = this.jwtService.verifyToken(token, expectedUserId);
    } catch (error) {
      console.error(error.message);
    }

    return this.db.Drug.findByPk(id, {
      include: [
        {
          model: this.db.User,
          where: {
            id: {[this.db.Op.eq]: this.db.sequelize.col('drugs.userId')},
            authToken: {[this.db.Op.eq]: process.env.AUTH_TOKEN}
          }
        }
      ]
    }).then(drug => {
      if (!drug) {
        return {error: 'Not authorized'};
      }
      return this.db.Drug.findByPk(id);
    });

  }

  async getAllDrugs(userId, token) {
    // Add logic to retrieve all drugs associated with a user

    try {
      const decodedToken = this.jwtService.verifyToken(token, userId);
    } catch (error) {
      console.error(error.message);
    }

    return Drug.findAll();
  }

}


module.exports = DrugsService;
