import categoryModel from "../models/categoryModel.js";

class CategoryService {
  async create(body) {
    try {
      const { categoryName } = body;
      return await categoryModel.create({ categoryName });
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await categoryModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      return await categoryModel.findOneAndDelete(id)
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CategoryService();
