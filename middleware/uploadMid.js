// middleware/upload.js
import multer from "multer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Konfigurasi storage untuk menyimpan file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Filter file yang diterima
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/vnd.ms-excel" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only Excel files are allowed."), false);
  }
};

// Konfigurasi upload
const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
