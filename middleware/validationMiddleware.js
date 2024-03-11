import { body, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import Peg from "../models/pegModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        if (errorMessage[0].startsWith("no job")) {
          throw new NotFoundError(errorMessage);
        }
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

export const validateTambahPeg = withValidationErrors([
  body("nip")
    .custom(async (nip, { req }) => {
      const peg = await Peg.findOne({ nip });
      if (peg) {
        throw new BadRequestError("NIP sudah terdaftar");
      }
    })
    .notEmpty()
    .withMessage("alamat belum diisi")
    .isLength({ min: 18, max: 18 })
    .withMessage("NIP harus 18 digit")
    .isNumeric()
    .withMessage("NIP harus berupa angka tanpa spasi"),
]);

export const validateLoginInput = withValidationErrors([
  body("nip").notEmpty().withMessage("nip belum diisi"),
  body("password").notEmpty().withMessage("password belum diisi"),
]);

export const validateUpdatePegInput = withValidationErrors([
  body("nama").notEmpty().withMessage("nama belum diisi"),
  body("alamat").notEmpty().withMessage("alamat belum diisi"),
  body("nip")
    .custom(async (nip, { req }) => {
      const peg = await Peg.findOne({ nip });
      if (peg && peg._id.toString() !== req.user.pegId) {
        throw new BadRequestError("NIP sudah terdaftar");
      }
    })
    .notEmpty()
    .withMessage("alamat belum diisi")
    .isLength({ min: 18, max: 18 })
    .withMessage("NIP harus 18 digit")
    .isNumeric()
    .withMessage("NIP harus berupa angka tanpa spasi"),
]);

export const validateChangePass = withValidationErrors([
  body("nip").notEmpty().withMessage("Anda belum pilih nama pegawai"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password minimal 6 karakter"),
  body("confPassword").custom(async (value, { req }) => {
    if (value !== req.body.password) {
      throw new BadRequestError(
        "Pastikan password baru dan konfirmasinya sama"
      );
    }
  }),
]);
