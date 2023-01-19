import galleryService from "../services/galleryService.js";

class galleryController {
  async create(req, res) {
    try {
      const picture = await galleryService.create(req.body, req.files.picture);
      res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const picture = await galleryService.getAll();
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const picture = await galleryService.getById(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const picture = await galleryService.delete(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new galleryController();
