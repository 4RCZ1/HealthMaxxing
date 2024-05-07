class Measurement {
    constructor(name, date, value, userId, measurementType) {
        this.name = name;
        this.date = date;
        this.value = value;
        this.userId = userId;
        this.measurementType = measurementType;
    }
}

measurementType

class measurementType {
    constructor(name, date, value, userId, measurementType) {
        this.name = name;
        this.date = date;
        this.value = value;
        this.userId = userId;
        this.measurementType = measurementType;
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




}



