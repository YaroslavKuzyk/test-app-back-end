import mongoose from "mongoose";

const adminModel = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("adminModel", adminModel);
