import PartnersService from "../services/PartnersService.js";

class PartnersController {
  async create(req, res) {
    try {
      const picture = await PartnersService.create(req.files.picture);
      res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const picture = await PartnersService.getAll();
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const picture = await PartnersService.getById(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const picture = await PartnersService.delete(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PartnersController();
