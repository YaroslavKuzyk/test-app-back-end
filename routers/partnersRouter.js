import Router from 'express'
import PartnersController from '../controllers/PartnersController.js'

const partnersRouter = new Router()

partnersRouter.post('/partners', PartnersController.create)
partnersRouter.get('/partners', PartnersController.getAll)
partnersRouter.get('/partners/:id', PartnersController.getById)
partnersRouter.delete('/partners/:id', PartnersController.delete)

export default partnersRouter