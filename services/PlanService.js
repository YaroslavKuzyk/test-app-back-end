import planModel from "../models/planModel.js";

class PlanController {
  async create(body) {
    try {
      const { name, price, plans } = body;
      return planModel.create({ name, price, plans });
    } catch (error) {
      return error;
    }
  }
  async getAll() {
    try {
      return planModel.find();
    } catch (error) {
      return error;
    }
  }
  async getById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }
      return planModel.findById(id);
    } catch (error) {
      return error;
    }
  }
  async put(id, body) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      return await planModel.findByIdAndUpdate(id, body, {new: true})
    } catch (error) {
      return error;
    }
  }
  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      await planModel.findByIdAndDelete(id);
      return { message: "Успошно видалено" };
    } catch (error) {
      return error;
    }
  }
}

export default new PlanController();
