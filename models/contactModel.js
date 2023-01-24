import mongoose from "mongoose";

const contactModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  date: {type: Number, required: true},
  new: { type: Boolean, default: true },
});

export default mongoose.model("contactModel", contactModel);