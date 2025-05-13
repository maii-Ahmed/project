////لوكال استوردج
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import image from '../../assets/image1.jpg';
// import { Link } from 'react-router-dom';

// export default function ShowCourse() {
//   let [attendance, setAttendance] = useState(null);
//   let [searchTerm, setSearchTerm] = useState('');
//   let [courses, setCourses] = useState([]); // State to store courses list

//   // Fetch courses from localStorage on component mount
//   useEffect(() => {
//     const storedCourses = localStorage.getItem('courses');
//     if (storedCourses) {
//       setCourses(JSON.parse(storedCourses));
//     } else {
//       setCourses([]);
//     }
//   }, []);

//   async function getProduct(id) {
//     // Check if there are courses in localStorage
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     if (storedCourses.length === 0) {
//       setAttendance([]);
//       return;
//     }

//     try {
//       if (!id) return;
//       let { data } = await axios.get(
//         `https://bigbrotherv01.runasp.net/api/Course/all/${id}`
//       );
//       console.log('API Response:', data); // للتحقق من البيانات القادمة
//       setAttendance(Array.isArray(data) ? data : data.courses || []); // التأكد من أن البيانات مصفوفة
//     } catch (err) {
//       console.log('Error:', err);
//       setAttendance([]); // في حالة الخطأ، اجعلها مصفوفة فارغة
//     }
//   }

//   const handleSearch = (e) => {
//     e.preventDefault();
//     getProduct(searchTerm);
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (!value) {
//       setAttendance([]); // مسح الداتا من الجدول لو السيرش فاضي
//     }
//   };

//   return (
//     <>
//       <div className="tap min-h-screen montserrat-subrayada-bold mt-16">
//         <img src={image} className="w-[25px] pt-7 mb-1" alt="" />
//         <h2 className="text-white border-b-[2px] w-[6%] ms-7 border-b-amber-50">COURSE</h2>
//         <Link to="/Home" className="text-black">
//           <button className="fixed left-2 top-[40%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
//             <i className="fa-solid fa-house mb-2"></i>
//             {"home".split("").map((letter, index) => (
//               <span key={index}>{letter}</span>
//             ))}
//           </button>
//         </Link>

//         <Link to="/Course">
//           <svg
//             className="w-6 h-6 rounded-full bg-white mt-5 ms-2 dark:text-white"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//             transform="scale(-1,1)"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"
//             />
//           </svg>
//         </Link>

//         <div className="mt-4 flex flex-col justify-start items-center">
//           <div className="w-[80%] md:w-[85%] lg:w-[80%] ml-10">
//             <div>
//               <h2 className="mb-2 text-yellow-300 text-[20px]">
//                 <i className="fa-solid fa-grip-lines-vertical text-white text-2xl me-4"></i>
//                 ALL COURSE <span className="text-white">: {courses.length}</span>
//               </h2>
//               <h2 className="mb-8 text-yellow-300 text-[20px]">
//                 <i className="fa-solid fa-grip-lines-vertical text-white text-2xl me-4"></i>
//                 INSTRUCTOR NAME <span className="text-white">: DR/AMR</span>
//               </h2>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-5 items-center">
//               <form className="max-w-md mx-auto" onSubmit={handleSearch}>
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
//                     placeholder="Enter course ID to search..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                   />
//                 </div>
//               </form>

//               <button
//                 type="submit"
//                 onClick={handleSearch}
//                 className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
//               >
//                 Search
//               </button>
//             </div>

//             <div className="overflow-y-auto border-[#6B4A4A] rounded-xl">
//               <table className="w-full border-4">
//                 <thead className="bg-[#D9D9D9]/40 text-white text-sm md:text-base">
//                   <tr className="text-center">
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">
//                         NAME OF COURSE
//                       </span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">ID</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">DAY</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">START FORM</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">END IN</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">INSTRUCTOR ID</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-[#D9D9D9]/40 text-[19px]">
//                   {attendance && attendance.length > 0 ? (
//                     attendance.map((p, i) => (
//                       <tr key={i} className="text-center">
//                         <td className="px-6 py-5 border-3 border-s-0 border-[#000000]">{p.name}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.id}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.dayOfCourse}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.startFrom}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.endIn}</td>
//                         <td className="px-6 py-4 text-black border-3 border-s-0 border-[#000000]">{p.instructorId}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
//                         No data available. Please search for a course ID.
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






// دا بي السيرش 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import image from '../../assets/image1.jpg';
// import { Link } from 'react-router-dom';

// export default function ShowCourse() {
//   let [attendance, setAttendance] = useState(null);
//   let [searchTerm, setSearchTerm] = useState('');
  

//   async function getProduct(id) {
//     try {
//       if (!id) return;
//       let { data } = await axios.get(
//         `https://bigbrotherv01.runasp.net/api/Course/all/${id}`
//       );
//       console.log('API Response:', data); // للتحقق من البيانات القادمة
//       setAttendance(Array.isArray(data) ? data : data.courses || []); // التأكد من أن البيانات مصفوفة
//     } catch (err) {
//       console.log('Error:', err);
//       setAttendance([]); // في حالة الخطأ، اجعلها مصفوفة فارغة
//     }
//   }

//   const handleSearch = (e) => {
//     e.preventDefault();
//     getProduct(searchTerm);
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (!value) {
//       setAttendance([]); // مسح الداتا من الجدول لو السيرش فاضي
//     }
//   };

//   useEffect(() => {
//     // لن نستدعي الدالة تلقائيًا بدون ID
//   }, []);

//   return (
//     <>
//       <div className="tap min-h-screen montserrat-subrayada-bold mt-16">
//         <img src={image} className="w-[25px] pt-7 mb-1" alt="" />
//         <h2 className="text-white border-b-[2px] w-[6%] ms-7 border-b-amber-50">COURSE</h2>
//         <Link to="/Home" className="text-black">
//           <button className="fixed left-2 top-[40%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
//             <i className="fa-solid fa-house mb-2"></i>
//             {"home".split("").map((letter, index) => (
//               <span key={index}>{letter}</span>
//             ))}
//           </button>
//         </Link>

//         <Link to="/Course">
//           <svg
//             className="w-6 h-6 rounded-full bg-white mt-5 ms-2 dark:text-white"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//             transform="scale(-1,1)"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"
//             />
//           </svg>
//         </Link>

//         <div className="mt-4 flex flex-col justify-start items-center">
//           <div className="w-[80%] md:w-[85%] lg:w-[80%] ml-10">
//             <div>
//               <h2 className="mb-2 text-yellow-300 text-[20px]">
//                 <i className="fa-solid fa-grip-lines-vertical text-white text-2xl me-4"></i>
//                 ALL COURSE <span className="text-white">: 8</span>
//               </h2>
//               <h2 className="mb-8 text-yellow-300 text-[20px]">
//                 <i className="fa-solid fa-grip-lines-vertical text-white text-2xl me-4"></i>
//                 INSTRUCTOR NAME <span className="text-white">: DR/AMR</span>
//               </h2>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-5 items-center">
//               <form className="max-w-md mx-auto" onSubmit={handleSearch}>
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
//                     placeholder="Enter course ID to search..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                   />
//                 </div>
//               </form>

//               <button
//                 type="submit"
//                 onClick={handleSearch}
//                 className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
//               >
//                 Search
//               </button>
//             </div>

//             <div className="overflow-y-auto border-[#6B4A4A] rounded-xl">
//               <table className="w-full border-4">
//                 <thead className="bg-[#D9D9D9]/40 text-white text-sm md:text-base">
//                   <tr className="text-center">
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">
//                         NAME OF COURSE
//                       </span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">ID</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">DAY</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">START FORM</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">END IN</span>
//                     </th>
//                     <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
//                       <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">INSTRUCTOR ID</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-[#D9D9D9]/40 text-[19px]">
//                   {attendance && attendance.length > 0 ? (
//                     attendance.map((p, i) => (
//                       <tr key={i} className="text-center">
//                         <td className="px-6 py-5 border-3 border-s-0 border-[#000000]">{p.name}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.id}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.dayOfCourse}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.startFrom}</td>
//                         <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.endIn}</td>
//                         <td className="px-6 py-4 text-black border-3 border-s-0 border-[#000000]">{p.instructorId}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
//                         No data available. Please search for a course ID.
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



// دا بي السيرش 





import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import image from '../../assets/image1.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/ContextProvider';

export default function ShowCourse() {
  const { asisstantId, token } = useContext(AuthContext); // Get asisstantId and token from context
  const [attendance, setAttendance] = useState([]); // Initialize as empty array

  // Function to fetch all courses for the assistant
  async function getAllCourses() {
    try {
      if (!asisstantId) {
        console.error('No asisstantId found');
        setAttendance([]);
        return;
      }
      if (!token) {
        console.error('No token found');
        setAttendance([]);
        return;
      }
      const { data } = await axios.get(
        `https://bigbrotherv01.runasp.net/api/Course/all/${asisstantId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('API Response:', data);
      setAttendance(Array.isArray(data) ? data : data.courses || []);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setAttendance([]);
    }
  }

  useEffect(() => {
    // No automatic fetch on mount; wait for button click
  }, []);

  return (
    <>
      <div className="tap min-h-screen montserrat-subrayada-bold mt-16">
        <img src={image} className="w-[25px] pt-7 mb-1" alt="" />
        <h2 className="text-white border-b-[2px] w-[6%] ms-7 border-b-amber-50">COURSE</h2>
        <Link to="/Home" className="text-black">
          <button className="fixed left-2 top-[40%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
            <i className="fa-solid fa-house mb-2"></i>
            {"home".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </button>
        </Link>

        <Link to="/Course">
          <svg
            className="w-6 h-6 rounded-full bg-white mt-5 ms-2 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            transform="scale(-1,1)"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"
            />
          </svg>
        </Link>

        <div className="mt-4 flex flex-col justify-start items-center">
          <div className="w-[80%] md:w-[85%] lg:w-[80%] ml-10">
            <div>
              <button
                onClick={getAllCourses}
                className="mb-2 text-yellow-300 text-[20px] bg-green-700  px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition duration-200 font-semibold"
              >
                <i className="fa-solid fa-grip-lines-vertical text-white text-2xl me-4"></i>
                ALL COURSES <span className="text-white">: {attendance.length}</span>
              </button>
              <h2 className="mb-8 text-yellow-300 text-[20px]">
                <i className="fa-solid fa-grip-lines-vertical text-white text-2xl me-4"></i>
                INSTRUCTOR NAME <span className="text-white">: DR/AMR</span>
              </h2>
            </div>

            <div className="overflow-y-auto border-[#6B4A4A] rounded-xl">
              <table className="w-full border-4">
                <thead className="bg-[#D9D9D9]/40 text-white text-sm md:text-base">
                  <tr className="text-center">
                    <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
                      <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">
                        NAME OF COURSE
                      </span>
                    </th>
                    <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
                      <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">ID</span>
                    </th>
                    <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
                      <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">DAY</span>
                    </th>
                    <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
                      <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">START FORM</span>
                    </th>
                    <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
                      <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">END IN</span>
                    </th>
                    <th className="px-3 py-2 border-3 border-t-0 border-s-0 border-[#000000] whitespace-nowrap">
                      <span className="inline-block border-amber-50 border-2 text-black px-2 py-1">INSTRUCTOR ID</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#D9D9D9]/40 text-[19px]">
                  {attendance.length > 0 ? (
                    attendance.map((p, i) => (
                      <tr key={i} className="text-center">
                        <td className="px-6 py-5 border-3 border-s-0 border-[#000000]">{p.name}</td>
                        <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.id}</td>
                        <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.dayOfCourse}</td>
                        <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.startFrom}</td>
                        <td className="px-6 py-4 border-3 border-s-0 border-[#000000]">{p.endIn}</td>
                        <td className="px-6 py-4 text-black border-3 border-s-0 border-[#000000]">{p.instructorId}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                        No data available. Please click "ALL COURSES" to fetch courses.
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