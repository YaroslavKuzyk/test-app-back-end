import Router from "express";
import CategoryController from '../controllers/CategoryController.js'

const categoryRouter = new Router()

categoryRouter.post('/category', CategoryController.create)
categoryRouter.get('/category', CategoryController.getAll)
categoryRouter.delete('/category/:id', CategoryController.delete)

export default categoryRouter