import adminModel from "../models/adminModel.js";

class AdminService {
  async login(body) {
    try {
      const { login, password } = body;
      const admin = await adminModel.findOne({ login });

      if (!admin) {
        return { isAdmin: false, message: "Неверное имя пользователя" };
      }

      if (password != admin.password) {
        return { isAdmin: false, message: "Неверный пароль" };
      }

      return { isAdmin: true, message: "Вы успешно вошли" };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AdminService();
