import { Router } from "express";
const router = Router();
import { uploadFile } from "../controllers/uploadController.js";

// Route untuk upload file Excel
router.post("/upload-file", uploadFile);

export default router;
