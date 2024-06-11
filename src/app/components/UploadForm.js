"use client";
import UploadIcon from "./UploadIcon";
import axios from "axios";

const UploadForm = () => {
  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  }

  return (
    <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
      <UploadIcon />
      <span>Choose file</span>
      <input onChange={upload} type="file" className="hidden" />
    </label>
  );
};

export default UploadForm;
