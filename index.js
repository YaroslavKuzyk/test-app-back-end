import express from 'express'
import mongoose from 'mongoose'
import galleryRouter from './routers/galleryRouter.js'
import fileUpload from 'express-fileupload'

const PORT = 8080
const DB = 'mongodb+srv://admin:admin@cluster0.tetakbn.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use('/api', galleryRouter)


async function start() {
    try {
        await mongoose.connect(DB)
        app.listen(PORT, ()=> console.log(`Server started on ${PORT} port`))
    } catch (error) {
        console.log(error);
    }
}

start()