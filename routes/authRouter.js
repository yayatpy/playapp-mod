import { Router } from "express";
const router = Router();

import { login, logout, tambahPeg } from "../controllers/authController.js";
import {
  validateChangePass,
  validateLoginInput,
  validateTambahPeg,
} from "../middleware/validationMiddleware.js";

router.post("/tambah-peg", validateTambahPeg, validateChangePass, tambahPeg);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
