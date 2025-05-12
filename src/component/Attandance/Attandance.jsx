



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from '../../assets/image1.jpg';

export default function Attendance() {
  const [attendance, setAttendance] = useState(null);
  const [courses, setCourses] = useState([]); // State to store courses list
  const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order: descending
  const [hoveredStudent, setHoveredStudent] = useState(null); // Track hovered student
  const [searchId, setSearchId] = useState(''); // State for ID search input
  const [searchStudentId, setSearchStudentId] = useState(''); // State for student ID search input
  const [selectedCourseId, setSelectedCourseId] = useState(''); // State for selected course ID
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
  const fixedPageSize = 20; // Fixed page size for Course ID search

  // Retrieve Bearer Token from localStorage
  const getToken = () => {
    return localStorage.getItem('token'); // Adjust based on where your token is stored
  };

  // Fetch attendance data for a specific ID
  async function getAttendance(Id) {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found. Please log in.');
      }

      let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Attendance/${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('API Response (ID):', data);
      const attendanceData = data.value;
      if (Array.isArray(attendanceData)) {
        setAttendance(attendanceData);
        setTotalPages(1); // No pagination for ID search
      } else {
        setAttendance([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.log('Error (ID Search):', err);
      if (err.response?.status === 401) {
        alert('غير مصرح: برجاء تسجيل الدخول مرة أخرى.');
      } else {
        alert('فشل في جلب بيانات الحضور. برجاء المحاولة مرة أخرى.');
      }
      setAttendance([]);
      setTotalPages(1);
    }
  }

  // Fetch attendance data for a specific student by ID
  async function getAttendanceId(StudentId) {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found. Please log in.');
      }

      let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Attendance/for-student/${StudentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('API Response (Student ID):', data);
      const attendanceData = data.value;
      if (Array.isArray(attendanceData)) {
        setAttendance(attendanceData);
        setTotalPages(1); // No pagination for Student ID search
      } else {
        setAttendance([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.log('Error (Student ID Search):', err);
      if (err.response?.status === 401) {
        alert('غير مصرح: برجاء تسجيل الدخول مرة أخرى.');
      } else {
        alert('فشل في جلب بيانات الحضور. برجاء المحاولة مرة أخرى.');
      }
      setAttendance([]);
      setTotalPages(1);
    }
  }

  // Fetch attendance data for a specific course with pagination
  async function getAttendanceByCourse(courseId, pageNumber) {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found. Please log in.');
      }

      const { data } = await axios.get(
        `https://bigbrotherv01.runasp.net/api/Attendance/for-course?courseId=${courseId}&PageNumber=${pageNumber}&PageSize=${fixedPageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('API Response (Course):', data);
      const attendanceData = data.value?.items || [];
      const totalPagesFromApi = data.value?.totalPages || 1;
      console.log('Attendance Data:', attendanceData, 'Total Pages:', totalPagesFromApi);
      if (Array.isArray(attendanceData) && attendanceData.length > 0) {
        setAttendance(attendanceData);
        setTotalPages(totalPagesFromApi);
      } else {
        setAttendance([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error('Error (Course Search):', err);
      if (err.response?.status === 401) {
        alert('غير مصرح: برجاء تسجيل الدخول مرة أخرى.');
        // Optionally redirect to login page
        // window.location.href = '/login';
      } else {
        alert('فشل في جلب بيانات الحضور للكورس. برجاء المحاولة مرة أخرى.');
      }
      setAttendance([]);
      setTotalPages(1);
    }
  }

  // Download attendance data as a file
  async function downloadAttendance() {
    if (!selectedCourseId) {
      alert('برجاء اختيار معرف الكورس لتحميل بيانات الحضور.');
      return;
    }
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found. Please log in.');
      }

      const response = await axios.get(
        `https://bigbrotherv01.runasp.net/api/Attendance/download?courseId=${selectedCourseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: 'blob',
        }
      );
      console.log('Download Response:', response);

      let filename = `attendance_course_${selectedCourseId}.xlsx`;
      const disposition = response.headers['content-disposition'];
      if (disposition && disposition.indexOf('attachment') !== -1) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
        }
      }

      const blob = new Blob([response.data], {
        type: response.headers['content-type'] || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log('Error (Download):', err);
      if (err.response?.status === 401) {
        alert('غير مصرح: برجاء تسجيل الدخول مرة أخرى.');
      } else {
        alert('فشل في تحميل ملف الحضور. برجاء المحاولة مرة أخرى.');
      }
    }
  }

  // Sort data when the sort button is clicked
  const sortData = (order) => {
    if (!attendance) return;
    const sortedData = [...attendance].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setAttendance(sortedData);
    setSortOrder(order);
  };

  // Handle search form submission for ID
  const handleIdSearch = (e) => {
    e.preventDefault();
    if (searchId.trim() === '') {
      setAttendance([]); // Clear attendance if search is empty
      setTotalPages(1);
    } else {
      getAttendance(searchId);
    }
  };

  // Handle search form submission for Student ID
  const handleStudentSearch = (e) => {
    e.preventDefault();
    setSelectedCourseId(''); // Clear selected course when searching by student ID
    if (searchStudentId.trim() === '') {
      setAttendance([]); // Clear attendance if search is empty
      setTotalPages(1);
    } else {
      getAttendanceId(searchStudentId);
    }
  };

  // Handle course selection change
  const handleCourseSearch = (e) => {
    const courseId = e.target.value;
    setSelectedCourseId(courseId);
    setCurrentPage(1);
    if (courseId) {
      getAttendanceByCourse(courseId, 1);
    } else {
      setAttendance([]);
      setTotalPages(1);
    }
  };

  // Handle re-fetching data when the same course is re-selected
  const handleCourseReSelect = () => {
    if (selectedCourseId) {
      setCurrentPage(1);
      getAttendanceByCourse(selectedCourseId, 1);
    }
  };

  // Handle page change for pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (selectedCourseId) {
      getAttendanceByCourse(selectedCourseId, page);
    }
  };

  // Handle clearing data when search fields are emptied
  const handleSearchIdChange = (e) => {
    const value = e.target.value;
    setSearchId(value);
    if (value.trim() === '') {
      setAttendance([]); // Clear data if the field is empty
      setTotalPages(1);
    }
  };

  const handleSearchStudentIdChange = (e) => {
    const value = e.target.value;
    setSearchStudentId(value);
    if (value.trim() === '') {
      setAttendance([]); // Clear data if the field is empty
      setTotalPages(1);
    }
  };

  // Fetch courses from localStorage on component mount
  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses([]);
    }
  }, []);

  // Debug: Log the attendance and courses state whenever it changes
  useEffect(() => {
    console.log('Current attendance state:', attendance, 'Total Pages:', totalPages);
    console.log('Current courses state:', courses);
  }, [attendance, totalPages, courses]);

  return (
    <>
      <div className="tap min-h-screen montserrat-subrayada-bold mt-16">
        <Link to="/Home" className="text-black">
          <button className="fixed left-2 top-[32%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
            <i className="fa-solid fa-house mb-2"></i>
            {"home".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </button>
        </Link>

        <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto">
          <div className="flex flex-col items-center justify-start">
            <h2 className="border-b-[2px] w-[12%] text-center border-b-amber-50 pt-12 text-[#FFFFFF] text-[19px]">
              ATTENDANCE
            </h2>

            {/* Search Form for ID */}
            <div className="grid grid-cols-2 gap-4 mb-5 items-center overflow-hidden">
              <form className="max-w-md mx-auto mt-3" onSubmit={handleIdSearch}>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                    placeholder="Enter ID to search..."
                    value={searchId}
                    onChange={handleSearchIdChange}
                  />
                </div>
              </form>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  onClick={handleIdSearch}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Search Form for Student ID */}
            <div className="grid grid-cols-2 gap-4 mb-5 items-center overflow-hidden">
              <form className="max-w-md mx-auto mt-3" onSubmit={handleStudentSearch}>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                    placeholder="Enter student ID to search..."
                    value={searchStudentId}
                    onChange={handleSearchStudentIdChange}
                  />
                </div>
              </form>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  onClick={handleStudentSearch}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Select for Course ID */}
            <div className="grid grid-cols-2 gap-4 mb-5 items-center overflow-hidden">
              <div className="max-w-lg mx-auto mt-3">
                <div className="relative">
                  <select
                    value={selectedCourseId}
                    onChange={handleCourseSearch}
                    onClick={handleCourseReSelect}
                    className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  >
                    <option value="">Select a course...</option>
                    {courses.map((course) => (
                      <option key={course.courseId} value={course.courseId}>
                        {course.courseName} (ID: {course.courseId})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex space-x-2">
                {/* No search button needed, selection triggers the fetch */}
              </div>
            </div>

            {/* Pagination Controls and Download Button (Above Table) */}
            {(totalPages > 1 || selectedCourseId) && (
              <div className="flex justify-center mb-4 space-x-2">
                {totalPages > 1 && (
                  <>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:bg-gray-400 hover:bg-green-800 transition"
                    >
                      Previous
                    </button>
                    <span className="px-4 py-2 text-white">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:bg-gray-400 hover:bg-green-800 transition"
                    >
                      Next
                    </button>
                  </>
                )}
                {selectedCourseId && (
                  <button
                    onClick={downloadAttendance}
                    className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
                  >
                    Download
                  </button>
                )}
              </div>
            )}

            {/* Scrollable Table Container */}
            <div className="w-full md:w-[103%] mx-auto overflow-x-auto border-[#6B4A4A] rounded-xl mt-9">
              <table className="w-full border-collapse border-8 bg-[#D9D9D9]/30 min-h-full">
                <thead className="bg-[#FFFFFF]/69 text-[#000000] text-sm md:text-base">
                  <tr className="text-center">
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">id</th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Student Name</th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Student ID</th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Course ID</th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Assistant ID</th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => sortData('asc')}
                          className={`px-2 py-1 rounded-lg transition text-white ${
                            sortOrder === 'asc' ? 'bg-[#237618]' : 'bg-[#237618] hover:bg-[#237618]'
                          }`}
                        >
                          تصاعدي
                        </button>
                        <span>Date</span>
                        <button
                          onClick={() => sortData('desc')}
                          className={`px-2 py-1 rounded-lg transition text-white ${
                            sortOrder === 'desc' ? 'bg-[#237618]' : 'bg-[#237618] hover:bg-[#237618]'
                          }`}
                        >
                          تنازلي
                        </button>
                      </div>
                    </th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Time</th>
                    <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Counter</th>
                  </tr>
                </thead>
                <tbody className="bg-[#D9D9D9]/30 border-t-gray-500 text-[19px] text-[#181818]">
                  {attendance?.length > 0 ? (
                    attendance.map((p, i) => (
                      <tr key={i} className="text-center">
                        <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{i + 1}</td>
                        <td
                          className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A] relative hover:bg-transparent"
                          onMouseEnter={() => setHoveredStudent(i)}
                          onMouseLeave={() => setHoveredStudent(null)}
                        >
                          <span className={`relative z-10 ${hoveredStudent === i ? 'hidden' : 'block'}`}>
                            {p.studentName || 'غير متوفر'}
                          </span>
                          {hoveredStudent === i && image && (
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                              <img
                                src={image}
                                alt={p.studentName || 'غير متوفر'}
                                className="w-full h-full object-cover rounded-lg opacity-80"
                              />
                            </div>
                          )}
                        </td>
                        <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.studentId}</td>
                        <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.courseId}</td>
                        <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.asisstantId}</td>
                        <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.date}</td>
                        <td className="border-4 px-8 py-4 border-[#000000]/52 text-black border-t-4 border-t-[#6B4A4A]">{p.time}</td>
                        <td className="border-4 px-8 py-4 border-[#000000]/52 text-black border-t-4 border-t-[#6B4A4A]">{p.counter}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-4">
                        مفيش داتا متاحة
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


















////لوكال استوردج



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import image from '../../assets/image1.jpg';

// export default function Attendance() {
//   const [attendance, setAttendance] = useState(null);
//   const [courses, setCourses] = useState([]); // State to store courses list
//   const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order: descending
//   const [hoveredStudent, setHoveredStudent] = useState(null); // Track hovered student
//   const [searchId, setSearchId] = useState(''); // State for ID search input
//   const [searchStudentId, setSearchStudentId] = useState(''); // State for student ID search input
//   const [selectedCourseId, setSelectedCourseId] = useState(''); // State for selected course ID
//   const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
//   const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
//   const fixedPageSize = 20; // Fixed page size for Course ID search

//   // Retrieve Bearer Token from localStorage
//   const getToken = () => {
//     return localStorage.getItem('token'); // Adjust based on where your token is stored
//   };

//   // Fetch attendance data for a specific ID
//   async function getAttendance(Id) {
//     // Check if there are courses in localStorage
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     if (storedCourses.length === 0) {
//       setAttendance([]);
//       setTotalPages(1);
//       return;
//     }

//     try {
//       const token = getToken();
//       if (!token) {
//         setAttendance([]);
//         setTotalPages(1);
//         return;
//       }

//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Attendance/${Id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('API Response (ID):', data);
//       const attendanceData = data.value;
//       if (Array.isArray(attendanceData)) {
//         setAttendance(attendanceData);
//         setTotalPages(1); // No pagination for ID search
//       } else {
//         setAttendance([]);
//         setTotalPages(1);
//       }
//     } catch (err) {
//       console.log('Error (ID Search):', err);
//       setAttendance([]);
//       setTotalPages(1);
//     }
//   }

//   // Fetch attendance data for a specific student by ID
//   async function getAttendanceId(StudentId) {
//     // Check if there are courses in localStorage
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     if (storedCourses.length === 0) {
//       setAttendance([]);
//       setTotalPages(1);
//       return;
//     }

//     try {
//       const token = getToken();
//       if (!token) {
//         setAttendance([]);
//         setTotalPages(1);
//         return;
//       }

//       let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Attendance/for-student/${StudentId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('API Response (Student ID):', data);
//       const attendanceData = data.value;
//       if (Array.isArray(attendanceData)) {
//         setAttendance(attendanceData);
//         setTotalPages(1); // No pagination for Student ID search
//       } else {
//         setAttendance([]);
//         setTotalPages(1);
//       }
//     } catch (err) {
//       console.log('Error (Student ID Search):', err);
//       setAttendance([]);
//       setTotalPages(1);
//     }
//   }

//   // Fetch attendance data for a specific course with pagination
//   async function getAttendanceByCourse(courseId, pageNumber) {
//     try {
//       const token = getToken();
//       if (!token) {
//         setAttendance([]);
//         setTotalPages(1);
//         return;
//       }

//       const { data } = await axios.get(
//         `https://bigbrotherv01.runasp.net/api/Attendance/for-course?courseId=${courseId}&PageNumber=${pageNumber}&PageSize=${fixedPageSize}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log('API Response (Course):', data);
//       const attendanceData = data.value?.items || [];
//       const totalPagesFromApi = data.value?.totalPages || 1;
//       console.log('Attendance Data:', attendanceData, 'Total Pages:', totalPagesFromApi);
//       if (Array.isArray(attendanceData) && attendanceData.length > 0) {
//         setAttendance(attendanceData);
//         setTotalPages(totalPagesFromApi);
//       } else {
//         setAttendance([]);
//         setTotalPages(1);
//       }
//     } catch (err) {
//       console.error('Error (Course Search):', err);
//       setAttendance([]);
//       setTotalPages(1);
//     }
//   }

//   // Download attendance data as a file
//   async function downloadAttendance() {
//     if (!selectedCourseId) {
//       return;
//     }
//     try {
//       const token = getToken();
//       if (!token) {
//         return;
//       }

//       const response = await axios.get(
//         `https://bigbrotherv01.runasp.net/api/Attendance/download?courseId=${selectedCourseId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           responseType: 'blob',
//         }
//       );
//       console.log('Download Response:', response);

//       let filename = `attendance_course_${selectedCourseId}.xlsx`;
//       const disposition = response.headers['content-disposition'];
//       if (disposition && disposition.indexOf('attachment') !== -1) {
//         const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
//         const matches = filenameRegex.exec(disposition);
//         if (matches != null && matches[1]) {
//           filename = matches[1].replace(/['"]/g, '');
//         }
//       }

//       const blob = new Blob([response.data], {
//         type: response.headers['content-type'] || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', filename);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.log('Error (Download):', err);
//     }
//   }

//   // Sort data when the sort button is clicked
//   const sortData = (order) => {
//     if (!attendance) return;
//     const sortedData = [...attendance].sort((a, b) => {
//       const dateA = new Date(a.date);
//       const dateB = new Date(b.date);
//       return order === 'asc' ? dateA - dateB : dateB - dateA;
//     });
//     setAttendance(sortedData);
//     setSortOrder(order);
//   };

//   // Handle search form submission for ID
//   const handleIdSearch = (e) => {
//     e.preventDefault();
//     if (searchId.trim() === '') {
//       setAttendance([]); // Clear attendance if search is empty
//       setTotalPages(1);
//     } else {
//       getAttendance(searchId);
//     }
//   };

//   // Handle search form submission for Student ID
//   const handleStudentSearch = (e) => {
//     e.preventDefault();
//     setSelectedCourseId(''); // Clear selected course when searching by student ID
//     if (searchStudentId.trim() === '') {
//       setAttendance([]); // Clear attendance if search is empty
//       setTotalPages(1);
//     } else {
//       getAttendanceId(searchStudentId);
//     }
//   };

//   // Handle course selection change
//   const handleCourseSearch = (e) => {
//     const courseId = e.target.value;
//     setSelectedCourseId(courseId);
//     setCurrentPage(1);
//     if (courseId) {
//       getAttendanceByCourse(courseId, 1);
//     } else {
//       setAttendance([]);
//       setTotalPages(1);
//     }
//   };

//   // Handle re-fetching data when the same course is re-selected
//   const handleCourseReSelect = () => {
//     if (selectedCourseId) {
//       setCurrentPage(1);
//       getAttendanceByCourse(selectedCourseId, 1);
//     }
//   };

//   // Handle page change for pagination
//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//     if (selectedCourseId) {
//       getAttendanceByCourse(selectedCourseId, page);
//     }
//   };

//   // Handle clearing data when search fields are emptied
//   const handleSearchIdChange = (e) => {
//     const value = e.target.value;
//     setSearchId(value);
//     if (value.trim() === '') {
//       setAttendance([]); // Clear data if the field is empty
//       setTotalPages(1);
//     }
//   };

//   const handleSearchStudentIdChange = (e) => {
//     const value = e.target.value;
//     setSearchStudentId(value);
//     if (value.trim() === '') {
//       setAttendance([]); // Clear data if the field is empty
//       setTotalPages(1);
//     }
//   };

//   // Fetch courses from localStorage on component mount
//   useEffect(() => {
//     const storedCourses = localStorage.getItem('courses');
//     if (storedCourses) {
//       setCourses(JSON.parse(storedCourses));
//     } else {
//       setCourses([]);
//     }
//   }, []);

//   // Debug: Log the attendance and courses state whenever it changes
//   useEffect(() => {
//     console.log('Current attendance state:', attendance, 'Total Pages:', totalPages);
//     console.log('Current courses state:', courses);
//   }, [attendance, totalPages, courses]);

//   return (
//     <>
//       <div className="tap min-h-screen montserrat-subrayada-bold mt-16">
//         <Link to="/Home" className="text-black">
//           <button className="fixed left-2 top-[32%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
//             <i className="fa-solid fa-house mb-2"></i>
//             {"home".split("").map((letter, index) => (
//               <span key={index}>{letter}</span>
//             ))}
//           </button>
//         </Link>

//         <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto">
//           <div className="flex flex-col items-center justify-start">
//             <h2 className="border-b-[2px] w-[12%] text-center border-b-amber-50 pt-12 text-[#FFFFFF] text-[19px]">
//               ATTENDANCE
//             </h2>

//             {/* Search Form for ID */}
//             <div className="grid grid-cols-2 gap-4 mb-5 items-center overflow-hidden">
//               <form className="max-w-md mx-auto mt-3" onSubmit={handleIdSearch}>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                     <svg
//                       className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     type="search"
//                     className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//                     placeholder="Enter ID to search..."
//                     value={searchId}
//                     onChange={handleSearchIdChange}
//                   />
//                 </div>
//               </form>
//               <div className="flex space-x-2">
//                 <button
//                   type="submit"
//                   onClick={handleIdSearch}
//                   className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* Search Form for Student ID */}
//             <div className="grid grid-cols-2 gap-4 mb-5 items-center overflow-hidden">
//               <form className="max-w-md mx-auto mt-3" onSubmit={handleStudentSearch}>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                     <svg
//                       className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     type="search"
//                     className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//                     placeholder="Enter student ID to search..."
//                     value={searchStudentId}
//                     onChange={handleSearchStudentIdChange}
//                   />
//                 </div>
//               </form>
//               <div className="flex space-x-2">
//                 <button
//                   type="submit"
//                   onClick={handleStudentSearch}
//                   className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* Select for Course ID */}
//             <div className="grid grid-cols-2 gap-4 mb-5 items-center overflow-hidden">
//               <div className="max-w-lg mx-auto mt-3">
//                 <div className="relative">
//                   <select
//                     value={selectedCourseId}
//                     onChange={handleCourseSearch}
//                     onClick={handleCourseReSelect}
//                     className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//                   >
//                     <option value="">Select a course...</option>
//                     {courses.map((course) => (
//                       <option key={course.courseId} value={course.courseId}>
//                         {course.courseName} (ID: {course.courseId})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 {/* No search button needed, selection triggers the fetch */}
//               </div>
//             </div>

//             {/* Pagination Controls and Download Button (Above Table) */}
//             {(totalPages > 1 || selectedCourseId) && (
//               <div className="flex justify-center mb-4 space-x-2">
//                 {totalPages > 1 && (
//                   <>
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:bg-gray-400 hover:bg-green-800 transition"
//                     >
//                       Previous
//                     </button>
//                     <span className="px-4 py-2 text-white">
//                       Page {currentPage} of {totalPages}
//                     </span>
//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === totalPages}
//                       className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:bg-gray-400 hover:bg-green-800 transition"
//                     >
//                       Next
//                     </button>
//                   </>
//                 )}
//                 {selectedCourseId && (
//                   <button
//                     onClick={downloadAttendance}
//                     className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
//                   >
//                     Download
//                   </button>
//                 )}
//               </div>
//             )}

//             {/* Scrollable Table Container */}
//             <div className="w-full md:w-[103%] mx-auto overflow-x-auto border-[#6B4A4A] rounded-xl mt-9">
//               <table className="w-full border-collapse border-8 bg-[#D9D9D9]/30 min-h-full">
//                 <thead className="bg-[#FFFFFF]/69 text-[#000000] text-sm md:text-base">
//                   <tr className="text-center">
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">id</th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Student Name</th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Student ID</th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Course ID</th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Assistant ID</th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">
//                       <div className="flex justify-between items-center">
//                         <button
//                           onClick={() => sortData('asc')}
//                           className={`px-2 py-1 rounded-lg transition text-white ${
//                             sortOrder === 'asc' ? 'bg-[#237618]' : 'bg-[#237618] hover:bg-[#237618]'
//                           }`}
//                         >
//                           تصاعدي
//                         </button>
//                         <span>Date</span>
//                         <button
//                           onClick={() => sortData('desc')}
//                           className={`px-2 py-1 rounded-lg transition text-white ${
//                             sortOrder === 'desc' ? 'bg-[#237618]' : 'bg-[#237618] hover:bg-[#237618]'
//                           }`}
//                         >
//                           تنازلي
//                         </button>
//                       </div>
//                     </th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Time</th>
//                     <th className="px-3 py-4 border border-[#6B4A4A] whitespace-nowrap">Counter</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-[#D9D9D9]/30 border-t-gray-500 text-[19px] text-[#181818]">
//                   {attendance?.length > 0 ? (
//                     attendance.map((p, i) => (
//                       <tr key={i} className="text-center">
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{i + 1}</td>
//                         <td
//                           className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A] relative hover:bg-transparent"
//                           onMouseEnter={() => setHoveredStudent(i)}
//                           onMouseLeave={() => setHoveredStudent(null)}
//                         >
//                           <span className={`relative z-10 ${hoveredStudent === i ? 'hidden' : 'block'}`}>
//                             {p.studentName || 'غير متوفر'}
//                           </span>
//                           {hoveredStudent === i && image && (
//                             <div className="absolute inset-0 flex items-center justify-center z-0">
//                               <img
//                                 src={image}
//                                 alt={p.studentName || 'غير متوفر'}
//                                 className="w-full h-full object-cover rounded-lg opacity-80"
//                               />
//                             </div>
//                           )}
//                         </td>
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.studentId}</td>
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.courseId}</td>
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.asisstantId}</td>
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.date}</td>
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 text-black border-t-4 border-t-[#6B4A4A]">{p.time}</td>
//                         <td className="border-4 px-8 py-4 border-[#000000]/52 text-black border-t-4 border-t-[#6B4A4A]">{p.counter}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="8" className="text-center py-4">
//                         مفيش داتا متاحة
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }