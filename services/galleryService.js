import FileService from "./FileService.js";
import galleryModel from "../models/galleryModel.js";

class GalleryService {
  async create(gallery, picture) {
    try {
      const pictureName = FileService.saveFile(picture);
      const createGallery = await galleryModel.create({
        ...gallery,
        picture: pictureName,
      });
      return createGallery;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const pictures = await galleryModel.find();
      return pictures;
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      
      const pictureName = await galleryModel.findOneAndDelete(id);
      const { picture } = await galleryModel.findById(id);
      FileService.deleteFile(picture);
      return pictureName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GalleryService();
