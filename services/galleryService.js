import fileSercive from './fileSercive.js';
import galleryModel from '../models/galleryModel.js'

class galleryService {
    async create(gallery, picture) {
        const pictureName = fileSercive.saveFile(picture);
        const createGallery = await galleryModel.create({...gallery, picture: pictureName});
        return createGallery;
    }

    async getAll() {
        const pictures = await galleryModel.find()
        return pictures
    }

    async getById(id) {
        if(!id) {
            throw new Error('No id')
        }

        const picture = await galleryModel.findById(id)
        return picture
    }

    async delete(id) {
        if(!id) {
            throw new Error('No id')
        }

        const { picture } = await galleryModel.findById(id)
        fileSercive.deleteFile (picture)
        const pictureName = await galleryModel.findOneAndDelete(id)
        return pictureName
    }
}

export default new galleryService()