import XLSX from "xlsx";
import fs from "fs";
import Test from "../models/testModel.js";

export const uploadFile = (req, res) => {
  const file = req.file;
  const workbook = XLSX.readFile(file.path);
  const sheet_name_list = workbook.SheetNames;
  const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  // Simpan data ke MongoDB
  Test.insertMany(xlData)
    .then(() => {
      fs.unlinkSync(file.path);
      res.status(200).send("Data uploaded successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error uploading data");
    });
};
