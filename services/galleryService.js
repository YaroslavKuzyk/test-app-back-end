import FileService from "./FileService.js";
import galleryModel from "../models/galleryModel.js";

class GalleryService {
  async create(gallery, picture) {
    try {
      const pictureName = FileService.saveFile(picture);
      await galleryModel.create({
        ...gallery,
        picture: pictureName,
      });
      return this.getAll();
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const pictures = await galleryModel.find();
      return pictures;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      const picture = await galleryModel.findById(id);
      return picture;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      const { picture } = await galleryModel.findById(id);
      await galleryModel.findOneAndDelete(id);
      FileService.deleteFile(picture);
      return this.getAll()
    } catch (error) {
      return error;
    }
  }
}

export default new GalleryService();
