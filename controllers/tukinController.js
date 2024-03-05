import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
import Tukin from "../models/tukinModel.js";

//GET ALL TUKINS
export const getAllTukins = async (req, res) => {
  const { sort, year, month } = req.query;

  const queryObject = {
    nip: req.user.nip,
  };

  if (year && month) {
    queryObject.bulan = {
      $gte: new Date(year, month - 1, 1),
      $lt: new Date(year, month, 1),
    };
  } else if (year) {
    queryObject.bulan = {
      $gte: new Date(year, 0, 1),
      $lt: new Date(parseInt(year, 10) + 1, 0, 1),
    };
  }

  const sortOption = {
    newest: "-bulan",
    oldest: "bulan",
  };

  const sortKey = sortOption[sort] || sortOption.newest;

  //PAGINATION

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  const tukins = await Tukin.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalTukin = await Tukin.countDocuments(queryObject);
  const numOfPage = Math.ceil(totalTukin / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalTukin, numOfPage, currentPage: page, tukins });
};

//GET SINGLE TKN
export const getTukin = async (req, res) => {
  const { nip } = req.params;
  const tukin = await Tukin.find({ nip });
  if (tukin.length === 0)
    throw new NotFoundError(` tukin dengan nip ${nip} tidak ditemukan`);
  res.status(StatusCodes.OK).json({ tukin });
};
