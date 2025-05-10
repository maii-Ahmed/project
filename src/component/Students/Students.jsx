


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import image from '../../assets/image1.jpg';

// export default function Students() {
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]); // Renamed to courses for clarity
//   const [file, setFile] = useState(null);
//   const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
//   const [courseSearchTerm, setCourseSearchTerm] = useState(""); // For course search

//   // Fetch student data by ID
//   async function getStudents(id) {
//     try {
//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Student/${id}`);
//       console.log("student",data)
//       setStudents(Array.isArray(data) ? data : [data]);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setStudents([]);
//     }
//   }

//   // Fetch students by course ID
//   async function getCourse(id) {
//     try {
//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Student/by-course/${id}`);
//       console.log("course",data)
//       setCourses(Array.isArray(data) ? data : [data]);
//     } catch (error) {
//       console.error("Error fetching course students:", error);
//       setCourses([]);
//     }
//   }

//   // Handle file upload
//   const handleFileUpload = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       console.log('File selected:', selectedFile);
//     }
//   };

//   const uploadFile = async () => {
//     if (!file) {
//       alert("Please select a file first.");
//       return;
//     }
    
//     const courseId = courseSearchTerm || "4";
//     const formData = new FormData();
//     formData.append('file', file);
    
//     try {
//       await axios.post(
//         `https://bigbrotherv01.runasp.net/api/Student/upload?courseid=${courseId}`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       alert('File uploaded successfully!');
//       getCourse(courseId);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('Error uploading file. Please try again.');
//     }
//   };
  

//   // Handle student search
//   const handleStudentSearch = (e) => {
//     e.preventDefault();
//     if (studentSearchTerm) {
//       getStudents(studentSearchTerm);
//     }
//   };

//   // Handle course search
//   const handleCourseSearch = (e) => {
//     e.preventDefault();
//     if (courseSearchTerm) {
//       getCourse(courseSearchTerm);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 tap montserrat-subrayada-bold mt-3">
//       <img src={image} className="w-[25px] mb-1" alt="" />
//       <h2 className="text-[white]/77 border-b-[2px] w-[6%] ms-9 border-b-amber-50 mb-9">STUDENTS</h2>

//       <Link to="/Home" className="text-black">
//         <button className="fixed left-2 top-[32%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
//           <i className="fa-solid fa-house mb-2"></i>
//           {"home".split("").map((letter, index) => (
//             <span key={index}>{letter}</span>
//           ))}
//         </button>
//       </Link>
//       <div className="w-full">
//         <div className="flex flex-col items-center justify-start">
//           <div className="grid grid-cols-2">
//             <div className="me-7">
//               <input
//                 type="file"
//                 className="hidden"
//                 id="file-upload"
//                 onChange={handleFileUpload}
//               />
//               <label
//                 htmlFor="file-upload"
//                 className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white cursor-pointer"
//               >
//                 Upload File <i className="fa-solid fa-arrow-up-from-bracket ms-2"></i>
//               </label>
//               <div className="flex justify-center gap-4 mt-4">
//                 <button onClick={uploadFile} className="hidden">
//                   Upload to Server
//                 </button>
//               </div>
//             </div>
//             <div>
//               <Link className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white" to="/Addone">
//                 ADD ONE <i className="fa fa-pen ms-3"></i>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="ms-15 mt-9">
//           <li><span className="text-white">NAME OF COURSE: DATA BASE</span></li>
//           <li><span className="text-white">CONTAIN: <span className="text-yellow-400">{students.length + courses.length}</span> STUDENTS</span></li>
//         </div>

//         {/* Student Search Form */}
//         <form className="max-w-md mx-auto mb-4" onSubmit={handleStudentSearch}>
//           <div className="relative flex items-center">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//               </svg>
//             </div>
//             <input
//               type="search"
//               className="block w-[90%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-[#D9D9D9]/49"
//               placeholder="Enter student ID..."
//               value={studentSearchTerm}
//               onChange={(e) => setStudentSearchTerm(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
//             >
//               Search Student
//             </button>
//           </div>
//         </form>

//         {/* Course Search Form */}
//         <form className="max-w-md mx-auto mb-4" onSubmit={handleCourseSearch}>
//           <div className="relative flex items-center">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//               </svg>
//             </div>
//             <input
//               type="search"
//               className="block w-[90%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-[#D9D9D9]/49"
//               placeholder="Enter course ID..."
//               value={courseSearchTerm}
//               onChange={(e) => setCourseSearchTerm(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
//             >
//               Search Course
//             </button>
//           </div>
//         </form>
//         {/* Students Table */}
//         <div className="w-full md:w-[80%] mx-auto overflow-x-auto">
//           <table className="w-full bg-white text-gray-700 border-collapse border-5 border-[#6B4A4A] mx-auto mt-5 min-w-[600px]">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2 border-b-2 border-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">STUDENT NAME</span>
//                 </th>
//                 <th className="px-4 py-2 border-2 border-[#6B4A4A] border-b-black">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">STUDENT ID</span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">code</span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">department</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {/* Display students from student search */}
//               {students.map((student, index) => (
//                 <tr key={index} className="border">
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name}</td>
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id}</td>
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.code}</td>
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.department}</td>
//                 </tr>
//               ))}
//               {/* Display students from course search */}
//               {courses.map((courses, index) => (
//                 <tr key={index} className="border">
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{courses.name}</td>
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{courses.id}</td>
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{courses.code}</td>
//                   <td className="px-4 py-2 border-2 border-[#6B4A4A]">{courses.department}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// } 


import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/image1.jpg";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
  const [courseSearchTerm, setCourseSearchTerm] = useState(""); // For course search
  const [errorMessage, setErrorMessage] = useState(""); // For displaying errors
  const location = useLocation();

  // Check if there are uploaded students from UploadFile page
  useEffect(() => {
    if (location.state?.uploadedStudents) {
      const uploadedStudents = Array.isArray(location.state.uploadedStudents)
        ? location.state.uploadedStudents
        : [location.state.uploadedStudents];
      console.log("Uploaded Students:", uploadedStudents);
      setStudents(uploadedStudents);
      setErrorMessage(""); // Reset error message
    }
  }, [location.state]);

  // Fetch student data by ID
  async function getStudents(id) {
    try {
      let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Student/${id}`);
      console.log("student", data);
      setStudents(Array.isArray(data) ? data : [data]);
      setErrorMessage(""); // Reset error message
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents([]);
      setErrorMessage("Failed to fetch student. Please check the Student ID and try again.");
    }
  }

  // Fetch students by course ID
  async function getCourseStudents(courseId) {
    try {
      let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Student/by-course/${courseId}`);
      console.log("course students", data);

      if (data && data.value && Array.isArray(data.value)) {
        setStudents(data.value);
        setErrorMessage(""); // Reset error message
      } else {
        setStudents([]);
        setErrorMessage("No students found for this course. Please check the Course ID.");
      }
    } catch (error) {
      console.error("Error fetching course students:", error);
      setStudents([]);
      setErrorMessage("Failed to fetch students for this course. Please check the Course ID and try again.");
    }
  }

  // Handle student search
  const handleStudentSearch = (e) => {
    e.preventDefault();
    if (studentSearchTerm) {
      getStudents(studentSearchTerm);
    }
  };

  // Handle course search
  const handleCourseSearch = (e) => {
    e.preventDefault();
    if (courseSearchTerm) {
      getCourseStudents(courseSearchTerm);
    }
  };

  // Handle clearing student search input
  const handleStudentSearchChange = (e) => {
    const value = e.target.value;
    setStudentSearchTerm(value);
    if (!value) {
      setStudents([]); // Clear the table data
      setErrorMessage(""); // Clear any error message
    }
  };

  // Handle clearing course search input
  const handleCourseSearchChange = (e) => {
    const value = e.target.value;
    setCourseSearchTerm(value);
    if (!value) {
      setStudents([]); // Clear the table data
      setErrorMessage(""); // Clear any error message
    }
  };

  return (
    <div className="min-h-screen pt-20 tap montserrat-subrayada-bold mt-3">
      <img src={image} className="w-[25px] mb-1" alt="" />
      <h2 className="text-[white]/77 border-b-[2px] w-[6%] ms-9 border-b-amber-50 mb-9">STUDENTS</h2>

      <Link to="/Home" className="text-black">
        <button className="fixed left-2 top-[32%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
          <i className="fa-solid fa-house mb-2"></i>
          {"home".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </button>
      </Link>
      <div className="w-full">
        <div className="flex flex-col items-center justify-start">
          <div className="grid grid-cols-2">
            <div className="me-7">
              <Link to="/Upload">
                <label
                  htmlFor="file-upload"
                  className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white cursor-pointer"
                >
                  Upload File <i className="fa-solid fa-arrow-up-from-bracket ms-2"></i>
                </label>
              </Link>
            </div>
            <div>
              <Link className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white" to="/Addone">
                ADD ONE <i className="fa fa-pen ms-3"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Course Search Form - Above NAME OF COURSE */}
        <div className="ms-15 mt-15">
          <form className="max-w-md m-6" onSubmit={handleCourseSearch}>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-[60%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white"
                placeholder="Enter course ID..."
                value={courseSearchTerm}
                onChange={handleCourseSearchChange} // Updated handler
              />
              <button
                type="submit"
                className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
              >
                search
              </button>
            </div>
          </form>

          <li>
            <span className="text-white">NAME OF COURSE: DATA BASE</span>
          </li>
          <li>
            <span className="text-white">
              CONTAIN: <span className="text-yellow-400">{students.length}</span> STUDENTS
            </span>
          </li>
        </div>

        {/* Display error message if exists */}
        {errorMessage && (
          <div className="max-w-md mx-auto mb-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center">
            {errorMessage}
          </div>
        )}

        {/* Student Search Form - Above table on the right */}
        <div className="w-full md:w-[80%] mx-auto flex justify-end mb-2">
          <form className="max-w-md" onSubmit={handleStudentSearch}>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-[70%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-[#D9D9D9]/49"
                placeholder="Enter student ID..."
                value={studentSearchTerm}
                onChange={handleStudentSearchChange} // Updated handler
              />
              <button
                type="submit"
                className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Students Table */}
        <div className="w-full md:w-[80%] mx-auto overflow-x-auto">
          <table className="w-full bg-white text-gray-700 border-collapse border-5 border-[#6B4A4A] mx-auto mt-5 min-w-[600px]">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border-b-2 border-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
                    STUDENT NAME
                  </span>
                </th>
                <th className="px-4 py-2 border-2 border-[#6B4A4A] border-b-black">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
                    STUDENT ID
                  </span>
                </th>
                <th className="border-2 border-e-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
                    code
                  </span>
                </th>
                <th className="border-2 border-e-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
                    department
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} className="border">
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name || "N/A"}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id || "N/A"}</td>
                    <td className="px-4 py connaissent-2 border-2 border-[#6B4A4A]">{student.code || "N/A"}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.department || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-2 text-center">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}