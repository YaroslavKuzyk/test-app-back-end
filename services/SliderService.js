import FileService from "./FileService.js";
import sliderModel from "../models/sliderModel.js";

class SliderService {
  async create(slider, picture) {
    try {
      const pictureName = FileService.saveFile(picture);
      const createSlider = await sliderModel.create({
        ...slider,
        picture: pictureName,
      });

      return createSlider;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      return await sliderModel.find();
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      return await sliderModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      const { picture } = await sliderModel.findById(id);
      await sliderModel.findOneAndDelete(id);
      FileService.deleteFile(picture);
      return {message: 'Успішно видалено'};
    } catch (error) {
      return error;
    }
  }
}

export default new SliderService();
