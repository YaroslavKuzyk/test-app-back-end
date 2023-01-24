import Router from 'express'
import GalleryController from '../controllers/GalleryController.js'
import {authenticateToken} from '../middlewear/authenticateToken.js'

const galleryRouter = new Router()

galleryRouter.post('/gallery', authenticateToken, GalleryController.create)
galleryRouter.get('/gallery', GalleryController.getAll)
galleryRouter.get('/gallery/:id', GalleryController.getById)
galleryRouter.delete('/gallery/:id', GalleryController.delete)

export default galleryRouter