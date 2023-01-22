import contactModel from "../models/contactModel.js";

class ContactService {
  async create(body) {
    try {
      const { name, email, text } = body;
      return await contactModel.create({ name, email, text });
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      return await contactModel.find();
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }

      return await contactModel.findById(id)
    } catch (error) {
      return error;
    }
  }

  async put(id, body) {
    try {
      if (!id) {
        throw new Error("No id");
      }
       
      return await contactModel.findByIdAndUpdate(id, body, {new: true})
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }
      await contactModel.findOneAndDelete({id})
      return {message: 'Успішно видаленно'}
    } catch (error) {
      return error;
    }
  }
}

export default new ContactService();
