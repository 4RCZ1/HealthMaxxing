class Measurement {
    constructor(name, date, value, userId) {
        this.name = name;
        this.date = date;
        this.value = value;
        this.userId = userId;
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
            const decodedToken = jwtService.verifyToken(token, id);
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
        try {
            const decodedToken = jwtService.verifyToken(token, id);
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

}



