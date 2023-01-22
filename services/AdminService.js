import adminModel from "../models/adminModel.js";

class AdminService {
  async login(body) {
    try {
      const { login, password } = body;
      const admin = await adminModel.findOne({ login });

      if (!admin) {
        return { isAdmin: false, message: "Невірне імʼя користувача" };
      }

      if (password != admin.password) {
        return { isAdmin: false, message: "Пароль не вірний" };
      }

      return { isAdmin: true, message: "Успіх" };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AdminService();
