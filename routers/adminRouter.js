import Router from 'express'
import AdminController from '../controllers/AdminController.js'

const adminRouter = new Router()

adminRouter.post('/admin-register', AdminController.registration)
adminRouter.post('/admin', AdminController.login)


export default adminRouter