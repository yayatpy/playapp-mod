import mongoose from "mongoose";
import { hashPassword } from "../utils/passwordUtils.js";

const PegawaiSchema = new mongoose.Schema({
  nama: String,
  nip: {
    type: String,
    unique: true,
  },
  password: String,
  alamat: {
    type: String,
    default: "jl. tinaloga no. 1 gorontalo",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  avatar: String,
  avatarPublicId: String,
});

// Hash the password before saving
PegawaiSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
  next();
});

//delete password from getCurrentUser
PegawaiSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("Pegawai", PegawaiSchema);
