import ContactService from '../services/ContactService.js'

class ContactController {
    async create(req, res) {
        try {
            const contactForm = await ContactService.create(req.body)
            res.json(contactForm)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        try {
            const contactForm = await ContactService.getAll()
            res.json(contactForm)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getById(req, res) {
        try {
            const contactForm = await ContactService.getById(req.params.id)
            res.json(contactForm)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async put(req, res) {
        try {
            const contactForm = await ContactService.put(req.params.id, req.body)
            res.json(contactForm)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            const contactForm = await ContactService.delete(req.params.id)
            res.json(contactForm)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new ContactController()