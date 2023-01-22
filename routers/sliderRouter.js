import Router from 'express'
import SliderController from '../controllers/SliderController.js'

const sliderRouter = new Router()

sliderRouter.post('/slider', SliderController.create)
sliderRouter.get('/slider', SliderController.getAll)
sliderRouter.get('/slider/:id', SliderController.getById)
sliderRouter.delete('/slider/:id', SliderController.delete)

export default sliderRouter