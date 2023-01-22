import SliderService from "../services/SliderService.js";

class SliderController {
  async create(req, res) {
    try {
      const picture = await SliderService.create(req.body, req.files.picture);
      res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const picture = await SliderService.getAll();
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const picture = await SliderService.getById(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const picture = await SliderService.delete(req.params.id);
      return res.json(picture);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new SliderController();
