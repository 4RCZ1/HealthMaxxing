import {User} from '../database/models';
import JWTService from "./JwtService";

const jwtService = new JWTService('100pk4');

class UserService {
  async getUserDetails (token) {
    const userId = jwtService.getUserId(token);
    const user = await User.findByPk(userId);
    return user;
  }
}