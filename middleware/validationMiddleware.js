import { body, check, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../models/jobModel.js";
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

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("invalid type value"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError("invalid mongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id ${value}`);
  }),
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
    .isLength(18)
    .withMessage("NIP harus 18 digit")
    .isNumeric()
    .withMessage("NIP harus berupa angka tanpa spasi"),
]);

export const validateChangePass = withValidationErrors([
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password minimal 6 karakter"),
  body("confirmPass").custom(async (value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new BadRequestError(
        "Pastikan password baru dan konfirmasinya sama"
      );
    }
  }),
]);

export const validateUploadInput = withValidationErrors([
  check("month").notEmpty().withMessage("Bulan harus dipilih"),
  check("year").notEmpty().withMessage("Tahun harus dipilih"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
]);
