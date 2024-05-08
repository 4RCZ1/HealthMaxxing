import sequelize from '../database/sequelize';
import {Sequelize} from "sequelize";
import JWTService from './JwtService';
import Measurement from '../database/models/Measurement';
import User from '../database/models/User';
import MeasurementPrescription from "../database/models/MeasurementPrescription";
import MeasurementTake from "../database/models/MeasurementTake";

const jwtService = new JWTService('100pa');

const validator = (target, requiredProperties) => {
    return requiredProperties.filter(property => !target[property]);
}

class MeasurementsService {
    async addMeasurementPrescription(measurement, token) {
        if (validator(measurement, ['name', 'frequency', 'value']).length > 0) {
            return {
                error: `missing required fields: ${validator(measurement, ['name', 'frequency', 'value']).join(', ')}`
            }
        }

        let measurementId = (await Measurement.findAll({
            where: {
                name: measurement.name
            },
            attributes: ['id']
        }))[0]?.id;

        if (!measurementId) {
            await Measurement.create(measurement);
            measurementId = (await Measurement.findAll({
                where: {
                    name: measurement.name
                },
                attributes: ['id']
            }))[0]?.id;
        }

        const userId = jwtService.getUserId(token);
        if (measurement.userId && measurement.userId !== userId) {
            if (measurement.prescriptorId && measurement.prescriptorId !== userId) {
                return {
                    error: 'Not authorized'
                }
            }
            measurement.prescriptorId = userId;
        }

        await MeasurementPrescription.create({
            userId: measurement.userId || userId,
            measurementId: measurementId,
            prescriptorId: measurement.prescriptorId,
            frequency: measurement.frequency,
            takeHour: measurement.takeHour,
            value: measurement.value
        });
        return {measurementId};
    }

    async takeMeasurement(prescriptionId, token) {
        const userId = jwtService.getUserId(token);
        const measurementPrescription = await MeasurementPrescription.findByPk(prescriptionId);
        if (!measurementPrescription) {
            return {
                error: 'Prescription not found'
            };
        }

        if (userId !== measurementPrescription.userId) {
            return {
                error: 'Not authorized'
            };
        }

        return MeasurementTake.create({
            measurementPrescriptionId: prescriptionId,
            userId: userId,
            timeTaken: new Date()
        });
    }

    async getMeasurementTakeHistory(token) {
        const userId = jwtService.getUserId(token);
        return MeasurementTake.findAll({
            where: {
                userId: userId
            },
            include: [
                {
                    model: MeasurementPrescription,
                    as: 'MeasurementPrescription',
                    include: [
                        {
                            model: Measurement,
                            as: 'Measurement'
                        }
                    ]
                }
            ],
        });
    }

    async getUserPrescriptions(token) {
        const userId = jwtService.getUserId(token);
        return MeasurementPrescription.findAll({
            where: {
                userId: userId
            },
            include: [
                {
                    model: Measurement,
                    as: 'Measurement',
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
        const closestPrescription = allUserPrescriptions.reduce((closestPrescription, prescription) => {
            if (!closestPrescription) {
                return prescription;
            }
            return prescription.takeHour - currentHour < closestPrescription.takeHour - currentHour ? prescription : closestPrescription;
        }, null);
        return closestPrescription;
    }

    async getMeasurement(id, token) {

        const measurement = this.db.Measurement.findByPk(id);
        try {
            const expectedUserId = measurement.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.Measurement.findByPk(id, {
            include: [
                {
                    model: this.db.User,
                    where: {
                        id: {[this.db.Op.eq]: this.db.sequelize.col('measurements.userId')},
                        authToken: {[this.db.Op.eq]: process.env.AUTH_TOKEN}
                    }
                }
            ]
        }).then(measurement => {
            if (!measurement) {
                return {error: 'Not authorized'};
            }
            return this.db.Measurement.findByPk(id);
        });

    }

    async getAllMeasurements(userId, token) {
        // Add logic to retrieve all measurements associated with a user

        try {
            const decodedToken = jwtService.verifyToken(token, userId);
        } catch (error) {
            console.error(error.message);
        }

        return Measurement.findAll();
    }

}


export default MeasurementsService;