import mongoose from "mongoose";

const galleryModel = new mongoose.Schema({
  picture: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model("galleryModel", galleryModel);
