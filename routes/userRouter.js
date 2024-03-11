import { Router } from "express";

import {
  validateChangePass,
  validateUpdatePegInput,
} from "../middleware/validationMiddleware.js";
import {
  changePass,
  getAppStats,
  getCurrentPeg,
  updatePeg,
  getAllPeg,
  changePassPeg,
  deletePeg,
} from "../controllers/userController.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-peg", getCurrentPeg);
router.get("/all-peg", getAllPeg);
router.get("/app-stats", getAppStats);
router.patch(
  "/update-peg",
  upload.single("avatar"),
  validateUpdatePegInput,
  updatePeg
);
router.patch("/change-pass", validateChangePass, changePass);
router.patch("/change-pass-peg", validateChangePass, changePassPeg);
router.delete("/delete-peg/:nip", deletePeg);

export default router;
