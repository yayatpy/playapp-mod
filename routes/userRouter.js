import { Router } from "express";

import {
  validateChangePass,
  validateUpdatePegInput,
} from "../middleware/validationMiddleware.js";
import { authorizePermission } from "../middleware/authMiddleware.js";
import {
  changePass,
  getAppStats,
  getCurrentPeg,
  updatePeg,
} from "../controllers/userController.js";
import { adminMenu } from "../controllers/userController.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-peg", getCurrentPeg);
router.get("/app-stats", getAppStats);
router.patch(
  "/update-peg",
  upload.single("avatar"),
  validateUpdatePegInput,
  updatePeg
);
router.patch("/change-pass", validateChangePass, changePass);

router.get("/admin", authorizePermission("admin"), adminMenu);

export default router;
