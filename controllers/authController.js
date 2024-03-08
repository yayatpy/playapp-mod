import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import Pegawai from "../models/pegModel.js";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";
import { StatusCodes } from "http-status-codes";

//TAMBAH PEGAWAI
export const tambahPeg = async (req, res) => {
  await Pegawai.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ msg: `akun untuk ${req.body.nama} berhasil dibuat` });
};

//LOGIN
export const login = async (req, res) => {
  const pegawai = await Pegawai.findOne({ nip: req.body.nip });
  const isValid =
    pegawai && (await comparePassword(req.body.password, pegawai.password));
  if (!isValid) throw new UnauthenticatedError("NIP dan/atau Password salah");

  const token = createJWT({
    pegId: pegawai._id,
    nip: pegawai.nip,
    role: pegawai.role,
  });

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "user log in" });
};

//LOGOUT
export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logout" });
};
