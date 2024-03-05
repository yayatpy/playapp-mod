import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Pegawai from "./models/pegModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  const jsonPeg = JSON.parse(
    await readFile(new URL("./utils/pegData.json", import.meta.url))
  );
  const pegs = jsonPeg.map((pegs) => {
    return { ...pegs };
  });
  await Pegawai.create(pegs);
  console.log("Success!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
