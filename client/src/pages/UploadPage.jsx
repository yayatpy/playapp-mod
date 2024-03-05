// src/UploadPage.js
import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow } from "../components";
import { useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";

function UploadPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "loading";
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await customFetch.post("/data/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload success:", res.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <Wrapper>
      <h4>Upload Excel File</h4>
      <input type="file" onChange={handleFileChange} />
      <button className="btn" onClick={handleUpload} disabled={isSubmitting}>
        {isSubmitting ? "loading..." : "upload"}
      </button>
    </Wrapper>
  );
}

export default UploadPage;
