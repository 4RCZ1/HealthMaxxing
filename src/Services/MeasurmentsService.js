class Measurement {
    constructor(name, date, value, userId, measurementType) {
        this.name = name;
        this.date = date;
        this.value = value;
        this.userId = userId;
        this.measurementType = measurementType;
    }
}

class measurementType {
    constructor(name, date, value, userId, measurementType) {
        this.name = name;
        this.date = date;
        this.value = value;
        this.userId = userId;
        this.measurementType = measurementType;
    }
}

class measurementAssociationt {
    constructor(userId, measurementId, howManyTimesADay) {
        this.userId = userId;
        this.measurementId = measurementId;
        this.howManyTimesADay = howManyTimesADay;
        
    }
}

class MeasurementsService {
    constructor(db) {
        this.db = db;
    }    

    async getAllMeasurements(userId, token) {
        try {
            const decodedToken = jwtService.verifyToken(token, userId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }
        return this.db.Measurement.findAll({
            where: {
                userId: { [this.db.Op.eq]: userId }
            }
        });
    }

    async addMeasurement(measurement, token) {
        return this.db.Measurement.create(measurement);
    }

    async updateMeasurement(id, update, token) {
        try {
            expectedUserId = update.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.Measurement.update(update, {
            where: {
                id: { [this.db.Op.eq]: id }
            }
        });
    }

    async deleteMeasurement(id, token) {
        const measurement = this.db.Measurement.findByPk(id);
        try {
            const decodedToken = jwtService.verifyToken(token, measurement.userId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.Measurement.destroy({
            where: {
                id: { [this.db.Op.eq]: id }
            }
        });
    }

    async createMeasurementType(measurementType, token) {
        try {
            expectedUserId = measurementType.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.MeasurementType.create(measurementType);
    }

    async deleteMeasurementType(id, token) {
        try {
            const decodedToken = jwtService.verifyToken(token, id);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.MeasurementType.destroy({
            where: {
                id: { [this.db.Op.eq]: id }
            }
        });
    }

    async getMeasurement(id, token) {
        const measurement = this.db.Measurement.findByPk(id);
        try {
            const expectedUserId = measurement.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        const measurementType = this.db.MeasurementType.findOne({
            where: {
                name: { [this.db.Op.eq]: measurement.measurementType }
            }
        });

        return { measurement, measurementType };
    }

    async getTodayMeasurements(userId, token) {
        try {
            const decodedToken = jwtService.verifyToken(token, userId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        const measurement = this.db.Measurement.findAll({
            where: {
                userId: { [this.db.Op.eq]: userId },
                date: { [this.db.Op.gte]: new Date(new Date().setHours(0,0,0,0)), [this.db.Op.lt]: new Date(new Date().setHours(23,59,59,999)) }
            }
        });

        results = []
        measurement.forEach(async m => {
            const measurementType = await this.db.MeasurementType.findOne({
                where: {
                    name: { [this.db.Op.eq]: m.measurementType }
                }
            });
            results.push({measurement, measurementType});
            
        });

        return results;
    }

    async getAllUserMeasurements(userId, token) {
        try {
            const decodedToken = jwtService.verifyToken(token, userId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        const association = this.db.measurementAssociationt.findAll({
            where: {
                userId: { [this.db.Op.eq]: userId }
            }
        });

        return association;
    }
}

export default MeasurementsService;

