import * as uuid from 'uuid';
import * as path from 'path';
import fs from 'fs'
import galleryModel from '../models/galleryModel.js'

class galleryService {
    saveFile(picture) {
        try {
            const pictureName = uuid.v4() + '.jpg'
            const picturePath = path.resolve('static', pictureName)
            picture.mv(picturePath)

            return pictureName
        } catch (error) {
            console.log(error);
        }
    }

    deleteFile(picture) {
        try {
            fs.unlinkSync(`static/${picture}`)
        } catch (error) {
            console.log(error)
        }
    }

    async create(gallery, picture) {
        const pictureName = this.saveFile(picture);
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
        this.deleteFile (picture)
        const pictureName = await galleryModel.findOneAndDelete(id)
        return pictureName
    }
}

export default new galleryService()