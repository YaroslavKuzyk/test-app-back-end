import mongoose from "mongoose";

const categoryModel = new mongoose.Schema({
  categoryName: { type: String, required: true },
});

export default mongoose.model("categoryModel", categoryModel);
