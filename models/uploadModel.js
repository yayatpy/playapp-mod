import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  name: String,
  month: Date,
  quantity: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("UploadXl", uploadSchema);
