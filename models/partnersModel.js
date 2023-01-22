import mongoose from "mongoose";

const partnersModel = new mongoose.Schema({
  picture: { type: String, required: true }
});

export default mongoose.model("partnersModel", partnersModel);