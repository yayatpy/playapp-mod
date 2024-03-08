import { Router } from "express";
const router = Router();

import {
  deleteTukin,
  getAllTukins,
  getTukin,
} from "../controllers/tukinController.js";

router.route("/").get(getAllTukins);
router.route("/:nip").get(getTukin);
router.route("/:bulan/:tahun").delete(deleteTukin);

export default router;
