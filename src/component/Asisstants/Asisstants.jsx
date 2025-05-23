


////لوكال استوردج



// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import image from '../../assets/image1.jpg';

// export default function Students() {
//   const [students, setStudents] = useState([]);
//   const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
//   const [courses, setCourses] = useState([]); // State to store courses list
  
//   // Fetch courses from localStorage on component mount
//   useEffect(() => {
//     const storedCourses = localStorage.getItem('courses');
//     if (storedCourses) {
//       setCourses(JSON.parse(storedCourses));
//     } else {
//       setCourses([]);
//     }
//   }, []);

//   // Fetch student data by ID
//   async function getStudents(id) {
//     // Check if there are courses in localStorage
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     if (storedCourses.length === 0) {
//       setStudents([]);
//       return;
//     }

//     try {
//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Asisstant/asisstants-for-course${id}`);
//       console.log("student", data);
//       setStudents(Array.isArray(data) ? data : [data]);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setStudents([]);
//     }
//   }

//   // Handle student search
//   const handleStudentSearch = (e) => {
//     e.preventDefault();
//     if (studentSearchTerm) {
//       getStudents(studentSearchTerm);
//     }
//   };

//   // Handle clearing student search input
//   const handleStudentSearchChange = (e) => {
//     const value = e.target.value;
//     setStudentSearchTerm(value);
//     if (!value) {
//       setStudents([]); // Clear the table data if the search input is empty
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 tap montserrat-subrayada-bold mt-3">
//       <img src={image} className="w-[25px] mb-1" alt="" />
//       <h2 className="text-[white]/77 border-b-[2px] w-[6%] ms-9 border-b-amber-50 mb-9">Assistant</h2>

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
//           <div>
//             <Link className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white" to="/AddAssistant">
//               ADD Assistant <i className="fa fa-pen ms-3"></i>
//             </Link>
//           </div>
//         </div>

//         <div className="ms-15 mt-9">
//           <li><span className="text-white">NAME OF COURSE: DATA BASE</span></li>
//           <li><span className="text-white">CONTAIN: <span className="text-yellow-400">{students.length}</span> STUDENTS</span></li>
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
//               onChange={handleStudentSearchChange}
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
//             >
//               Search Student
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
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">phoneNumber</span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">courses</span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">attendances</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {students.length > 0 ? (
//                 students.map((student, index) => (
//                   <tr key={index} className="border">
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.phoneNumber}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.courses}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.attendances}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="px-4 py-2 text-center">
//                     No assistants found.
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


//دا الصح
// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import image from '../../assets/image1.jpg';

// export default function Students() {
//   const [students, setStudents] = useState([]);
//   const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
  
//   // Fetch student data by ID
//   async function getStudents(id) {
//     try {
//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Asisstant/asisstants-for-course${id}`);
//       console.log("student", data);
//       setStudents(Array.isArray(data) ? data : [data]);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setStudents([]);
//     }
//   }

//   // Handle student search
//   const handleStudentSearch = (e) => {
//     e.preventDefault();
//     if (studentSearchTerm) {
//       getStudents(studentSearchTerm);
//     }
//   };

//   // Handle clearing student search input
//   const handleStudentSearchChange = (e) => {
//     const value = e.target.value;
//     setStudentSearchTerm(value);
//     if (!value) {
//       setStudents([]); // Clear the table data if the search input is empty
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 tap montserrat-subrayada-bold mt-3">
//       <img src={image} className="w-[25px] mb-1" alt="" />
//       <h2 className="text-[white]/77 border-b-[2px] w-[6%] ms-9 border-b-amber-50 mb-9">Assistant</h2>

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
//           <div>
//             <Link className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white" to="/AddAssistant">
//               ADD Assistant <i className="fa fa-pen ms-3"></i>
//             </Link>
//           </div>
//         </div>

//         <div className="ms-15 mt-9">
//           <li><span className="text-white">NAME OF COURSE: DATA BASE</span></li>
//           <li><span className="text-white">CONTAIN: <span className="text-yellow-400">{students.length}</span> STUDENTS</span></li>
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
//               onChange={handleStudentSearchChange}
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
//             >
//               Search Student
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
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">phoneNumber</span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">courses</span>
//                 </th>
//                 <th className="border-2 border-e-[#6B4A4A]">
//                   <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">attendances</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {students.length > 0 ? (
//                 students.map((student, index) => (
//                   <tr key={index} className="border">
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.phoneNumber}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.courses}</td>
//                     <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.attendances}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="px-4 py-2 text-center">
//                     No assistants found.
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

import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image1.jpg';
import { AuthContext } from '../../ContextProvider/ContextProvider';

export default function Students() {
  const { token } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const courses = JSON.parse(localStorage.getItem('courses')) || [];

  // Fetch assistant data by course ID
  async function getStudents(courseId) {
    try {
      setErrorMessage(null); // Reset error message
      if (!courseId) {
        console.error('No course ID provided');
        setStudents([]);
        setErrorMessage('Please select a course.');
        return;
      }
      if (!token) {
        console.error('No token found');
        setErrorMessage('Authentication token is missing. Please log in again.');
        setStudents([]);
        return;
      }
      console.log('Fetching assistants for courseId:', courseId);
      console.log('Using token:', token);
      const { data } = await axios.get(
        `https://bigbrotherv01.runasp.net/api/Asisstant/asisstants-for-course${courseId}`
        , {
          headers: {
            Authorization: `Bearer ${token}`,
          },
    });
      console.log('API Response:', data);
      // Handle response: ensure it's an array
      const assistants = Array.isArray(data) ? data : data.assistants || [data];
      setStudents(assistants);
      if (assistants.length === 0) {
        setErrorMessage('No assistants found for this course.');
      }
    } catch (error) {
      console.error('Error fetching assistants:', error);
      let errorMsg = 'Failed to fetch assistants. Please try again.';
      if (error.response) {
        console.log('Error Response:', error.response);
        errorMsg = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
      }
      setErrorMessage(errorMsg);
      setStudents([]);
    }
  }

  // Handle course selection
  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    console.log('Selected courseId:', courseId);
    setSelectedCourse(courseId);
    if (courseId) {
      getStudents(courseId);
    } else {
      setStudents([]);
      setErrorMessage(null);
    }
  };

  // Get the selected course name for display
  const selectedCourseName = courses.find((course) => course.courseId === selectedCourse)?.courseName || 'No course selected';

  return (
    <div className="min-h-screen pt-20 tap montserrat-subrayada-bold mt-3">
      <img src={image} className="w-[25px] mb-1" alt="" />
      <h2 className="text-[white]/77 border-b-[2px] w-[6%] ms-9 border-b-amber-50 mb-9">Assistant</h2>

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
          <div>
            <Link className="bg-[#237618] rounded-[7px] px-9 py-3 text-sm text-white" to="/AddAssistant">
              ADD Assistant <i className="fa fa-pen ms-3"></i>
            </Link>
          </div>
        </div>

        <div className="ms-15 mt-9">
          <li>
            <span className="text-white">NAME OF COURSE: <span className="text-yellow-400">{selectedCourseName}</span></span>
          </li>
          <li>
            <span className="text-white">CONTAIN: <span className="text-yellow-400">{students.length}</span> STUDENTS</span>
          </li>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="max-w-md mx-auto mb-4 p-4 text-sm text-red-800 rounded-lg bg-red-50">
            {errorMessage}
          </div>
        )}

        {/* Course Select Dropdown */}
        <div className="max-w-md mx-auto mb-4">
          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className="block w-[90%] p-2 text-sm text-black border border-gray-300 rounded-lg bg-[#D9D9D9]/49"
          >
            <option value="">Select a course</option>
            {courses.length > 0 ? (
              courses.map((course) => (
                <option key={course.courseId} value={course.courseId}>
                  {course.courseName}
                </option>
              ))
            ) : (
              <option disabled>No courses available</option>
            )}
          </select>
        </div>

        {/* Assistants Table */}
        <div className="w-full md:w-[80%] mx-auto overflow-x-auto">
          <table className="w-full bg-white text-gray-700 border-collapse border-5 border-[#6B4A4A] mx-auto mt-5 min-w-[600px]">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border-b-2 border-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">STUDENT NAME</span>
                </th>
                <th className="px-4 py-2 border-2 border-[#6B4A4A] border-b-black">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">STUDENT ID</span>
                </th>
                <th className="border-2 border-e-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">phoneNumber</span>
                </th>
                <th className="border-2 border-e-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">courses</span>
                </th>
                <th className="border-2 border-e-[#6B4A4A]">
                  <span className="inline-block rounded-b-lg bg-[#6B4A4A]/65 text-black px-2 py-1">attendances</span>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} className="border">
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name || 'N/A'}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id || 'N/A'}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.phoneNumber || 'N/A'}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">
                      {student.courses ? (Array.isArray(student.courses) ? student.courses.join(', ') : student.courses) : 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">
                      {student.attendances ? (Array.isArray(student.attendances) ? student.attendances.join(', ') : student.attendances) : 'N/A'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center">
                    Please select a course to view assistants.
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