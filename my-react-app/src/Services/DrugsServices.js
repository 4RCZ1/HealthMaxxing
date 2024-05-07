
// Function to update a drug
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

const JWTService = require('./JwtService');
const jwtService = new JWTService('100pa');

class DrugsService {

    constructor(db) {
        this.db = db;
    }

    async addDrug(drug) {
        if (!drug.name || !drug.timeOfDay || !drug.dosage || !drug.notificationPriority || !drug.notes || !drug.userId) {
            return {
                error: 'All fields are required'
            };
        }

        return this.db.Drug.create(drug)
            .catch(error => {
                return {
                    error: error.parent.detail
                };
            });

    }

    /**
     * Updates a drug in the database
     * @param {number} drugId The id of the drug to update
     * @param {Object} updatedInfo The updated information for the drug
     * @param {string} updatedInfo.name The updated name of the drug
     * @param {string} updatedInfo.timeOfDay The updated time of day to take the drug
     * @param {number} updatedInfo.dosage The updated dosage of the drug
     * @param {number} updatedInfo.notificationPriority The updated notification priority for the drug
     * @param {string} updatedInfo.notes The updated notes for the drug
     * @returns {Promise<Object>} The updated drug
     */
    async updateDrug(drugId, updatedInfo, token) {

        try {
            const expectedUserId = drugId.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }
        
        const drug = await this.db.Drug.update({
            name: updatedInfo.name,
            timeOfDay: updatedInfo.timeOfDay,
            dosage: updatedInfo.dosage,
            notificationPriority: updatedInfo.notificationPriority,
            notes: updatedInfo.notes
        }, {
            where: {
                id: { [this.db.Op.eq]: drugId }
            }
        });
    }

    async deleteDrug(drugId, token) {
        try {
            const expectedUserId = drugId.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.Drug.destroy({
            where: {
                id: { [this.db.Op.eq]: drugId }
            }
        });
    }


    async getDrug(id, token) {
        try {
            const expectedUserId = drugId.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.Drug.findByPk(id, {
            include: [
                {
                    model: this.db.User,
                    where: {
                        id: { [this.db.Op.eq]: this.db.sequelize.col('drugs.userId') },
                        authToken: { [this.db.Op.eq]: process.env.AUTH_TOKEN }
                    }
                }
            ]
        }).then(drug => {
            if (!drug) {
                return { error: 'Not authorized' };
            }
            return this.db.Drug.findByPk(id);
        });

    }


    async getAllDrugs(userId, token) {
        // Add logic to retrieve all drugs associated with a user
        try {
            const expectedUserId = drugId.userId
            const decodedToken = jwtService.verifyToken(token, expectedUserId);
            console.log(decodedToken);
        } catch (error) {
            console.error(error.message);
        }

        return this.db.Drug.findAll({
            where: {
                userId: { [this.db.Op.eq]: userId }
            }
        });

    }

}


module.exports = DrugsService;
module.exports = {
    getDrug,
    addDrug,
    updateDrug,
    deleteDrug,
    getAllDrugs
};
