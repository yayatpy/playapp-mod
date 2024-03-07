import { Router } from "express";
const router = Router();
import { uploadXlFile } from "../controllers/uploadXlController.js";

// Route untuk upload file Excel
router.post("/upload-xl", uploadXlFile);

export default router;
