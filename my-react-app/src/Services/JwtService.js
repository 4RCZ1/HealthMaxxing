const jwt = require('jsonwebtoken');


class JWTService {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    generateToken(userId) {
        return jwt.sign({ userId }, this.secretKey, { expiresIn: '1h' });
    }

    verifyToken(token, expectedUserId) {
        try {
            const decodedToken = jwt.verify(token, this.secretKey);
            if (decodedToken.userId !== expectedUserId) {
                throw new Error('Invalid token');
            }
            return decodedToken;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}


module.exports = JWTService;
