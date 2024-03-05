import { Router } from "express";
const router = Router();

import Tukin from "../models/tukinModel.js";

router.delete("/:year/:month", async (req, res) => {
  const year = parseInt(req.params.year);
  const month = parseInt(req.params.month);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59, 999);

  try {
    await Tukin.deleteMany({ bulan: { $gte: startDate, $lte: endDate } });
    res.status(200).json({ message: `Deleted data for ${year}-${month}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
