import AdminService from "../services/AdminService.js";

class AdminController {
  async registration(req, res) {
    try {
      const isAdmin = await AdminService.registration(req.body);
      res.json(isAdmin);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async login(req, res) {
    try {
      const isAdmin = await AdminService.login(req.body);
      res.json(isAdmin);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default new AdminController();
