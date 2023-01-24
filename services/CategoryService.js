import categoryModel from "../models/categoryModel.js";

class CategoryService {
  async create(body) {
    try {
      const { categoryName } = body;
      const candidate = await categoryModel.findOne({categoryName})
      if(candidate) {
        return categoryModel.find()
      }
      await categoryModel.create({ categoryName });
      return categoryModel.find()
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      return await categoryModel.find();
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      await categoryModel.findByIdAndDelete(id)
      return categoryModel.find()
    } catch (error) {
      return error;
    }
  }
}

export default new CategoryService();
