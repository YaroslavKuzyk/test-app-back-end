import adminModel from "../models/adminModel.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../config.js";

function generateAccessToken(id) {
  const payload = {id}

  return jwt.sign(payload, config.secret, {expiresIn: '5m'})
}

class AdminService {
  async registration(body) {
    try {
      const { login, password } = body;
      const hashPassword = bcryptjs.hashSync(password, 7)
      return await adminModel.create({login, password: hashPassword})
    } catch (error) {
      return error;
    }
  }
  async login(body) {
    try {
      const {login, password} = body
      const admin = await adminModel.findOne({login})

      if(!admin) {
        return {message: 'Користувач не знайдений'}
      }

      const validPassword = bcryptjs.compareSync(password, admin.password)  
      
      if(!validPassword) {
        return {message: 'Не вірний пароль'}
      }

      const generateToken = generateAccessToken(admin._id)

      return {token: generateToken}
    } catch (error) {
      return error;
    }
  }
}

export default new AdminService();
