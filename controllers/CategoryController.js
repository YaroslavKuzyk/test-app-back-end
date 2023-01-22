import CategoryService from '../services/CategoryService.js'

class CategoryController {
  async create(req, res) {
    try {
        const category = await CategoryService.create(req.body)
        res.json(category)
    } catch (error) {
        console.log(error);
    }
  }
  async getAll(req, res) {
    try {
        const category = await CategoryService.getAll()
        res.json(category)
    } catch (error) {
        console.log(error);
    }
  }
  async delete(req, res) {
    try {
        await CategoryService.delete(req.params.id)
        res.json({message: 'Категорія успішно видаленна'})
    } catch (error) {
        console.log(error);
    }
  }
}

export default new CategoryController();
