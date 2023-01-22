import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import cors from 'cors'

import galleryRouter from './routers/galleryRouter.js'
import adminRouter from './routers/adminRouter.js'
import categoryRouter from './routers/categoryRouter.js'
import contactRouter from './routers/ContactRouter.js'



const PORT = 8080
const DB = 'mongodb+srv://admin:admin@cluster0.tetakbn.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use('/api', galleryRouter)
app.use('/api', adminRouter)
app.use('/api', categoryRouter)
app.use('/api', contactRouter)


async function start() {
    try {
        await mongoose.connect(DB)
        app.listen(PORT, ()=> console.log(`Server started on ${PORT} port`))
    } catch (error) {
        console.log(error);
    }
}

start()