import Router from "express";
import ContactController from "../controllers/ContactController.js";

const contactRouter = new Router()

contactRouter.post('/contact-form', ContactController.create)
contactRouter.get('/contact-form', ContactController.getAll)
contactRouter.get('/contact-form/:id', ContactController.getById)
contactRouter.put('/contact-form/:id', ContactController.put)
contactRouter.delete('/contact-form/:id', ContactController.delete)

export default contactRouter