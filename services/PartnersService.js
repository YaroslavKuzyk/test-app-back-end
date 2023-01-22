import FileService from "./FileService.js";
import partnersModel from "../models/partnersModel.js";

class PartnersService {
  async create(picture) {
    try {
      const pictureName = FileService.saveFile(picture);
      return await partnersModel.create({
        picture: pictureName,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await partnersModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      return await partnersModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      const { picture } = await partnersModel.findById(id);
      await partnersModel.findOneAndDelete(id);
      FileService.deleteFile(picture);
      return {message: 'Успішно видалено'};
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PartnersService();
