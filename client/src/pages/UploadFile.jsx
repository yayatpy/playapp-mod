import React, { useState } from "react";
import axios from "axios";
import customFetch from "../utils/customFetch";

const UploadXlPage = () => {
  const [file, setFile] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("month", month);
    formData.append("year", year);

    try {
      await customFetch.post("/data/upload-xl", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to upload file.");
    }
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <select value={month} onChange={handleMonthChange} required>
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          {/* Add other months */}
        </select>
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={handleYearChange}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadXlPage;
