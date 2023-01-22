import TemaService from "../services/TemaService.js";

class TeamController {
  async create(req, res) {
    try {
      const picture = await TemaService.create(req.body, req.files.picture);
      res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const picture = await TemaService.getAll();
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const picture = await TemaService.getById(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const picture = await TemaService.delete(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TeamController();
