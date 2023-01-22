import Router from 'express'
import TeamController from '../controllers/TeamController.js'

const teamRouter = new Router()

teamRouter.post('/team', TeamController.create)
teamRouter.get('/team', TeamController.getAll)
teamRouter.get('/team/:id', TeamController.getById)
teamRouter.delete('/team/:id', TeamController.delete)

export default teamRouter