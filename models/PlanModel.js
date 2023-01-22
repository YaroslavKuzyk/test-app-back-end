import mongoose from "mongoose";

const planModel = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  plans: { type: Array, required: true },
});

export default mongoose.model("planModel", planModel);