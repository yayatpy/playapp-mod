// uploadDataController.js
import XLSX from "xlsx";
import fs from "fs";
import Xlfile from "../models/tukinModel.js";
import upload from "../middleware/uploadMid.js";
export const uploadFile = async (req, res) => {
  try {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ msg: "Data yang diupload bukan file *.xlx,*.xlxs" });
      }

      const file = req.file;
      if (!file) {
        return res.status(400).json({ msg: "Tidak ada file yang diupload" });
      }

      const workbook = XLSX.readFile(file.path);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      fs.unlinkSync(file.path);

      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        await Xlfile.create({
          tukin: item.tukin,
          koperasi: item.koperasi,
          pengayoman: item.pengayoman,
          dharmaWanita: item.dharmaWanita,
          bapor: item.bapor,
          majelisTaklim: item.majelisTaklim,
          sosial: item.sosial,
          qurban: item.qurban,
          bendahara: item.bendahara,
          pinjKoperasi: item.pinjKoperasi,
          lainLain: item.lainLain,
          jumPot: item.jumPot,
          jumBersih: item.jumBersih,
          nip: item.nip,
          bulan: new Date(
            `${req.body.year}-${
              req.body.month < 10 ? "0" + req.body.month : req.body.month
            }-01`
          ),
        });
      }

      res.status(200).send("File uploaded successfully.");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
};
