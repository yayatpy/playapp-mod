import { Router } from "express";
const router = Router();
import { uploadXlFile } from "../controllers/uploadXlController.js";
import { validateUploadInput } from "../middleware/validationMiddleware.js";

// Route untuk upload file Excel
router.post("/upload-xl", validateUploadInput, uploadXlFile);

export default router;
