import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [courseId, setCourseId] = useState(""); // Course ID input
  const navigate = useNavigate();

  async function handleUpload(event) {
    event.preventDefault();
    if (!file || !courseId) {
      setErrorMessage("Please select a file and enter a Course ID.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      // الخطوة الأولى: رفع الملف
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await axios.post(
        `https://bigbrotherv01.runasp.net/api/Student/upload?courseid=${courseId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File Uploaded Successfully:", uploadRes.data);

      // الخطوة الثانية: جلب الطلاب اللي متعلقين بالـ courseId
      const studentsRes = await axios.get(
        `https://bigbrotherv01.runasp.net/api/Student/by-course/${courseId}`
      );

      console.log("Students fetched after upload:", studentsRes.data);

      // التأكد إن الداتا اللي رجعت من الـ API هي array
      const uploadedStudents = Array.isArray(studentsRes.data.value)
        ? studentsRes.data.value
        : studentsRes.data.value
        ? [studentsRes.data.value]
        : [];

      // التوجيه لصفحة Students مع تمرير الداتا
      navigate("/Students", { state: { uploadedStudents } });
    } catch (error) {
      console.error("Error uploading file or fetching students:", error);
      setErrorMessage("Failed to upload file or fetch students. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-6 bg-gray-800 text-white tap min-h-screen">
      <h2 className="text-lg font-bold mb-4 mt-32">Upload Student File</h2>

      <form onSubmit={handleUpload} className="space-y-4">
        {/* Course ID Input */}
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="Enter Course ID"
          className="block w-full p-2 text-black border border-gray-300 rounded"
        />

        {/* File Input */}
        <input
          type="file"
          accept=".xlsx"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full p-2 text-black border border-gray-300 rounded"
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Upload Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}