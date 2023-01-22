import FileService from "./FileService.js";
import teamModel from "../models/teamModel.js";

class TemaService {
  async create(team, picture) {
    try {
      const pictureName = FileService.saveFile(picture);
      const createTeam = await teamModel.create({
        ...team,
        picture: pictureName,
      });

      return createTeam;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await teamModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      return await teamModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      const { picture } = await teamModel.findById(id);
      await teamModel.findOneAndDelete(id);
      FileService.deleteFile(picture);
      return {message: 'Успішно видалено'};
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TemaService();
