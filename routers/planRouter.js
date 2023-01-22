import Router from 'express'
import PlanController from '../controllers/PlanController.js'

const planRouter = new Router()

planRouter.post('/plan', PlanController.create)
planRouter.get('/plan', PlanController.getAll)
planRouter.get('/plan/:id', PlanController.getById)
planRouter.put('/plan/:id', PlanController.put)
planRouter.delete('/plan/:id', PlanController.delete)

export default planRouter