import * as uuid from 'uuid';
import * as path from 'path';
import fs from 'fs'

class fileService{
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
}

export default new fileService()
