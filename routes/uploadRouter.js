import { Router } from "express";
import { uploadFile } from "../controllers/uploadControllers.js";
import upload from "../middleware/uploadMid.js";

const router = Router();

router.post("/upload", upload.single("file"), uploadFile);

export default router;
