import AdminService from "../services/AdminService.js";

class AdminController {
  async login(req, res) {
    try {
      const isAdmin = await AdminService.login(req.body);
      res.json(isAdmin);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new AdminController();