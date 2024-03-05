import { StatusCodes } from "http-status-codes";
import { hashPassword } from "../utils/passwordUtils.js";
import Pegawai from "../models/pegModel.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const getCurrentPeg = async (req, res) => {
  const peg = await Pegawai.findOne({ _id: req.user.pegId });
  const pegWithoutPass = peg.toJSON();
  res.status(StatusCodes.OK).json({ peg: pegWithoutPass });
};

export const getAppStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "app stats" });
};

export const updatePeg = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const file = formatImage(req.file);

    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updatePeg = await Pegawai.findByIdAndUpdate(req.user.pegId, newUser);

  if (req.file && updatePeg.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatePeg.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "update pegawai", newUser });
};

export const changePass = async (req, res) => {
  const { newPassword } = req.body;
  const hashedPassword = await hashPassword(newPassword);
  const changePass = await Pegawai.findByIdAndUpdate(req.user.pegId, {
    password: hashedPassword,
  });
  res.status(StatusCodes.OK).json({ msg: changePass });
};

export const adminMenu = async (req, res) => {
  console.log("admin");
  res.status(StatusCodes.OK).json({ msg: "admin" });
};
