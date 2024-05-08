const jwt = require('jsonwebtoken');
class JWTService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  generateToken(userId) {
    return jwt.sign({ userId }, this.secretKey, { expiresIn: '1h' });
  }

  getUserId(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken.userId;
  }

  verifyToken(token, expectedUserId) {
    try {
      const userId = this.getUserId(token);
      if (userId !== expectedUserId) {
        throw new Error('Invalid token');
      }
      return userId;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}


module.exports = JWTService;
