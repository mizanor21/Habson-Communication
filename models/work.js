import mongoose, { Schema } from "mongoose";

const workSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Work = mongoose.model.Work || mongoose.model("Work", workSchema);

export default Work;
