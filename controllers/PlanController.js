import PlanService from "../services/PlanService.js";

class PlanController {
  async create(req, res) {
    try {
        const plan = await PlanService.create(req.body)
        res.json(plan)
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
        const plans = await PlanService.getAll()
        res.json(plans) 
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getById(req, res) {
    try {
        const plan = await PlanService.getById(req.params.id)
        res.json(plan)
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async put(req, res) {
    try {
        const plan = await PlanService.put(req.params.id, req.body)
        res.json(plan)
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
        const plan = await PlanService.delete(req.params.id)
        res.json(plan)
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PlanController();
