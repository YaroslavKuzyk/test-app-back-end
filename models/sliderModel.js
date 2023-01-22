import mongoose from "mongoose";

const sliderModel = new mongoose.Schema({
  title: { type: String, required: false },
  subtitle: { type: String, required: false },
  date: { type: Number, required: true },
  picture: { type: String, required: true }
});

export default mongoose.model("sliderModel", sliderModel);