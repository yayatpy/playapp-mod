import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  name: String,
  month: Date,
  naskun: {
    type: Number,
    default: 0,
  },
  nasbung: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("uploadData", uploadSchema);
