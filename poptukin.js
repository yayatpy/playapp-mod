import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Tukin from "./models/tukinModel.js";
// import User from "./models/userModels.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  // const user = await User.findOne({ email: "yayat@gmail.com" });
  const jsonTukin = JSON.parse(
    await readFile(new URL("./utils/tukinData.json", import.meta.url))
  );
  const tukins = jsonTukin.map((tukins) => {
    return { ...tukins };
  });
  // await Job.deleteMany({ createdBy: user._id });
  await Tukin.create(tukins);
  console.log("Success!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
