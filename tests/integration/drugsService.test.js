import DrugsServices from "../../src/Services/DrugsServices";
import jWTService from "../../src/Services/JwtService";
import sequelize from "../../src/database/sequelize";
import {User, DrugPrescription} from "../../src/database/models";

let userId;
let doctorId;

describe("DrugsServices", () => {
  beforeAll(async () => {
    await sequelize.sync({force: true});

    userId = (await User.create({
      name: "Test User"
    })).id

    doctorId = (await User.create({
      name: "Test Doctor",
      role: "doctor"
    })).id
  });

  it("should add a new drug prescription as a doctor", async () => {
    const drug = {
      name: "Paracetamol",
      takeHour: 8,
      frequency: "1-0-1",
      dose: 500,
      notes: "Take with water",
      userId: userId
    };
    const JWTService = new jWTService("100pa");
    const token = JWTService.generateToken(doctorId);
    const drugsServices = new DrugsServices();
    const response = await drugsServices.addDrugPrescription(drug, token);

    expect(response.error).toBeUndefined();

    const drugPrescription = await DrugPrescription.findAll({
      where: {
        userId: userId,
        drugId: response.drugId
      },
      raw: true
    });

    console.log(drugPrescription)
    expect(drugPrescription).not.toBeNull();
  });
  it("should add a new drug prescription to a drug that already exists", async () => {
    const drug = {
      name: "Paracetamol",
      frequency: "1-0-1",
      takeHour: 10,
      dose: 500,
      notes: "Take with water",
      userId: doctorId
    };
    const JWTService = new jWTService("100pa");
    const token = JWTService.generateToken(doctorId);
    const drugsServices = new DrugsServices();
    const response = await drugsServices.addDrugPrescription(drug, token);
    console.log('userId', userId)
    expect(response.error).toBeUndefined();

    const drugPrescription = await DrugPrescription.findAll({
      where: {
        userId: doctorId,
        drugId: response.drugId
      },
      raw: true
    });

    expect(drugPrescription).not.toBeNull();
  });
  it("should get user prescriptions, take a drug and then see it in the history", async () => {
    const jwtService = new jWTService("100pa");
    const userToken = jwtService.generateToken(userId);
    const drugsServices = new DrugsServices();
    const prescriptions = await drugsServices.getUserPrescriptions(userToken);
    const firstPrescriptionId = prescriptions[0].id;
    const takeDrugResponse = await drugsServices.takeDrug(firstPrescriptionId, userToken);
    expect(takeDrugResponse.error).toBeUndefined();
    const takeDrugHistory = await drugsServices.getDrugTakeHistory(userToken);
    expect(takeDrugHistory.map(e=>{
      return {
        prescriptionId: e.drugPrescriptionId,
        userId: e.userId
      }
    })).toContainEqual({
      prescriptionId: firstPrescriptionId,
      userId: userId
    });
  })
});