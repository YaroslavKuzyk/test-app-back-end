import * as uuid from 'uuid';
import * as path from 'path';
import fs from 'fs'

class fileService{
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)

            return fileName
        } catch (error) {
            console.log(error);
        }
    }

    deleteFile(picturfilee) {
        try {
            fs.unlinkSync(`static/${file}`)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new fileService()
