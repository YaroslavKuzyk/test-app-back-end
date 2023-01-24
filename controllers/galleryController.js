import GalleryService from "../services/GalleryService.js";

class GalleryController {
  async create(req, res) {
    try {
      const picture = await GalleryService.create(req.body, req.files.picture);
      res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      console.log(req);
      const picture = await GalleryService.getAll();
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const picture = await GalleryService.getById(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const picture = await GalleryService.delete(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new GalleryController();
