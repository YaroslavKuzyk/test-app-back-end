import Router from 'express'
import galleryController from '../controllers/galleryController.js'

const router = new Router()

router.post('/gallery', galleryController.create)
router.get('/gallery', galleryController.getAll)
router.get('/gallery/:id', galleryController.getById)
router.delete('/gallery/:id', galleryController.delete)

export default router