import CategoryService from '../services/CategoryService.js'

class CategoryController {
  async create(req, res) {
    try {
        const category = await CategoryService.create(req.body)
        res.json(category)
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
        const category = await CategoryService.getAll()
        res.json(category)
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
        const category = await CategoryService.delete(req.params.id)
        res.json(category)
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CategoryController();
