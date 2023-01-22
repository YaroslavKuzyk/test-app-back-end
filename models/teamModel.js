import mongoose from "mongoose";

const teamModel = new mongoose.Schema({
  name: { type: String, required: true },
  job: { type: String, required: true },
  picture: { type: String, required: true }
});

export default mongoose.model("teamModel", teamModel);