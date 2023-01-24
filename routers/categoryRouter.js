import Router from "express";
import CategoryController from '../controllers/CategoryController.js'
import {authenticateToken} from '../middlewear/authenticateToken.js'


const categoryRouter = new Router()

categoryRouter.post('/category',authenticateToken, CategoryController.create)
categoryRouter.get('/category', CategoryController.getAll)
categoryRouter.delete('/category/:id', CategoryController.delete)

export default categoryRouter