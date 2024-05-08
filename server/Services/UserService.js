const {User} = require('../database/models');
const JWTService = require("./JwtService");

const jwtService = new JWTService('100pk4');

class UserService {
  async getUserDetails (token) {
    const userId = jwtService.getUserId(token);
    const user = await User.findByPk(userId);
    return user;
  }
}