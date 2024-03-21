import React, { useState, ChangeEvent } from "react";
import axios from "axios";

interface FileUploadProps {
  onUpload: (message: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      onUpload("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/query/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        onUpload("File uploaded successfully");
      } else {
        onUpload("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      onUpload("An error occurred while uploading the file");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        className="bg-blue-500 p-2 rounded text-white"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
