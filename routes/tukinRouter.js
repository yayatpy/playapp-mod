import { Router } from "express";
const router = Router();

import { getAllTukins, getTukin } from "../controllers/tukinController.js";

router.route("/").get(getAllTukins);
router.route("/:nip").get(getTukin);

export default router;
