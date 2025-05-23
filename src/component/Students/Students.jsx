




import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/image1.jpg";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
  const [selectedCourseId, setSelectedCourseId] = useState(""); // For course selection
  const [courses, setCourses] = useState([]); // Store courses from localStorage
  const [errorMessage, setErrorMessage] = useState(""); // For displaying errors
  const location = useLocation();

  // Fetch courses from localStorage on component mount
  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses([]); // If no courses, set empty array
    }

    // Check if there are uploaded students from UploadFile page
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
        setErrorMessage("No students found for this course. Please select a valid course.");
      }
    } catch (error) {
      console.error("Error fetching course students:", error);
      setStudents([]);
      setErrorMessage("Failed to fetch students for this course. Please try again.");
    }
  }

  // Handle student search
  const handleStudentSearch = (e) => {
    e.preventDefault();
    if (studentSearchTerm) {
      getStudents(studentSearchTerm);
    }
  };

  // Handle course selection change
  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedCourseId(courseId);
    if (courseId) {
      getCourseStudents(courseId);
    } else {
      setStudents([]); // Clear students if no course selected
      setErrorMessage(""); // Clear error message
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

        {/* Course Selection Dropdown - Above NAME OF COURSE */}
        <div className="ms-15 mt-15">
          <form className="max-w-md m-6">
            <div className="relative flex items-center">
              <select
                value={selectedCourseId}
                onChange={handleCourseChange}
                className="block w-[60%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white"
              >
                <option value="">Select a course...</option>
                {courses.map((course) => (
                  <option key={course.courseId} value={course.courseId}>
                    {course.courseName} (ID: {course.courseId})
                  </option>
                ))}
              </select>
            </div>
          </form>

          <li>
            <span className="text-white">NAME OF COURSE: {courses.find(c => c.courseId === selectedCourseId)?.courseName || "N/A"}</span>
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
                onChange={handleStudentSearchChange}
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
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.code || "N/A"}</td>
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


////لوكال استورديج 


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import image from "../../assets/image1.jpg";

// export default function Students() {
//   const [students, setStudents] = useState([]);
//   const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
//   const [selectedCourseId, setSelectedCourseId] = useState(""); // For course selection
//   const [courses, setCourses] = useState([]); // Store courses from localStorage
//   const [errorMessage, setErrorMessage] = useState(""); // For displaying errors
//   const location = useLocation();

//   // Fetch courses from localStorage on component mount
//   useEffect(() => {
//     const storedCourses = localStorage.getItem("courses");
//     if (storedCourses) {
//       const parsedCourses = JSON.parse(storedCourses);
//       setCourses(parsedCourses);
//       if (parsedCourses.length === 0) {
        
//       }
//     } else {
//       setCourses([]);
    
//     }

//     // Check if there are uploaded students from UploadFile page
//     if (location.state?.uploadedStudents) {
//       const uploadedStudents = Array.isArray(location.state.uploadedStudents)
//         ? location.state.uploadedStudents
//         : [location.state.uploadedStudents];
//       console.log("Uploaded Students:", uploadedStudents);
//       setStudents(uploadedStudents);
//       setErrorMessage(""); // Reset error message
//     }
//   }, [location.state]);

//   // Fetch student data by ID
//   async function getStudents(id) {
//     // Check if there are courses in localStorage
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     if (storedCourses.length === 0) {
    
//       setStudents([]);
//       return;
//     }

//     try {
//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Student/${id}`);
//       console.log("student", data);
//       setStudents(Array.isArray(data) ? data : [data]);
//       setErrorMessage(""); // Reset error message
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setStudents([]);
//       setErrorMessage("Failed to fetch student. Please check the Student ID and try again.");
//     }
//   }

//   // Fetch students by course ID
//   async function getCourseStudents(courseId) {
//     try {
//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Student/by-course/${courseId}`);
//       console.log("course students", data);

//       if (data && data.value && Array.isArray(data.value)) {
//         setStudents(data.value);
//         setErrorMessage(""); // Reset error message
//       } else {
//         setStudents([]);
        
//       }
//     } catch (error) {
//       console.error("Error fetching course students:", error);
//       setStudents([]);
     
//     }
//   }

//   // Handle student search
//   const handleStudentSearch = (e) => {
//     e.preventDefault();
//     setSelectedCourseId(''); // Clear selected course when searching by student ID
//     if (studentSearchTerm) {
//       getStudents(studentSearchTerm);
//     }
//   };

//   // Handle course selection change
//   const handleCourseChange = (e) => {
//     const courseId = e.target.value;
//     setSelectedCourseId(courseId);
//     if (courseId) {
//       getCourseStudents(courseId);
//     } else {
//       setStudents([]); // Clear students if no course selected
//       setErrorMessage(""); // Clear error message
//     }
//   };

//   // Handle clearing student search input
//   const handleStudentSearchChange = (e) => {
//     const value = e.target.value;
//     setStudentSearchTerm(value);
//     if (!value) {
//       setStudents([]); // Clear the table data
//       setErrorMessage(""); // Clear any error message
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
//               <Link to="/Upload">
//                 <label
//                   htmlFor="file-upload"
//                   className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white cursor-pointer"
//                 >
//                   Upload File <i className="fa-solid fa-arrow-up-from-bracket ms-2"></i>
//                 </label>
//               </Link>
//             </div>
//             <div>
//               <Link className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white" to="/Addone">
//                 ADD ONE <i className="fa fa-pen ms-3"></i>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Course Selection Dropdown - Above NAME OF COURSE */}
//         <div className="ms-15 mt-15">
//           <form className="max-w-md m-6">
//             <div className="relative flex items-center">
//               <select
//                 value={selectedCourseId}
//                 onChange={handleCourseChange}
//                 className="block w-[60%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white"
//               >
//                 <option value="">Select a course...</option>
//                 {courses.map((course) => (
//                   <option key={course.courseId} value={course.courseId}>
//                     {course.courseName} (ID: {course.courseId})
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </form>

//           <li>
//             <span className="text-white">NAME OF COURSE: {courses.find(c => c.courseId === selectedCourseId)?.courseName || "N/A"}</span>
//           </li>
//           <li>
//             <span className="text-white">
//               CONTAIN: <span className="text-yellow-400">{students.length}</span> STUDENTS
//             </span>
//           </li>
//         </div>

//         {/* Display error message if exists */}
//         {errorMessage && (
//           <div className="max-w-md mx-auto mb-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center">
//             {errorMessage}
//           </div>
//         )}

//         {/* Student Search Form - Above table on the right */}
//         <div className="w-full md:w-[80%] mx-auto flex justify-end mb-2">
//           <form className="max-w-md" onSubmit={handleStudentSearch}>
//             <div className="relative flex items-center">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 className="block w-[70%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-[#D9D9D9]/49"
//                 placeholder="Enter student ID..."
//                 value={studentSearchTerm}
//                 onChange={handleStudentSearchChange}
//               />
//               <button
//                 type="submit"
//                 className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Students Table */}
//         <div className="w-full md:w-[80%] mx-auto overflow-x-auto">
//           <table className="w-full bg-white text-gray-700 border-collapse border-5 border-[#6B4A4A] mx-auto mt-5 min-w-[600px]">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2 border-b-2 border-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
//                     STUDENT NAME
//                   </span>
//                 </th>
//                 <th className="px-4 py-2 border-2 border-[#6B4A4A] border-b-black">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
//                     STUDENT ID
//                   </span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
//                     code
//                   </span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">
//                     department
//                   </span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {students.length > 0 ? (
//                 students.map((student, index) => (
//                   <tr key={index} className="border">
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name || "N/A"}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id || "N/A"}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.code || "N/A"}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.department || "N/A"}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="px-4 py-2 text-center">
//                     No students found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }