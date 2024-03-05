import XLSX from "xlsx";
import fs from "fs";
import Test from "../models/uploadModel.js";
import upload from "../middleware/uploadMid.js";
// Fungsi untuk mengupload file Excel
export const uploadXlFile = async (req, res) => {
  try {
    // Simpan file Excel ke server menggunakan multer
    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      // Baca file Excel
      const file = req.file;
      const workbook = XLSX.readFile(file.path);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      // Hapus file Excel dari server
      fs.unlinkSync(file.path);

      // Proses data Excel
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        // Simpan ke MongoDB
        await Test.create({
          name: item.name,
          quantity: item.quantity,
          month: new Date(`${req.body.year}-${req.body.month}-02`),
        });
      }

      res.status(200).send("File uploaded successfully.");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
};
