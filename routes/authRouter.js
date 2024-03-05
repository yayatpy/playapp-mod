import { Router } from "express";
const router = Router();

import { login, logout } from "../controllers/authController.js";
import { validateLoginInput } from "../middleware/validationMiddleware.js";

router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
