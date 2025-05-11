// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Assistants() {
//   const [assistants, setAssistants] = useState([]); // تخزين بيانات المساعدين
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   // 🔹 جلب المساعدين عند تحميل الصفحة
//   async function fetchAssistants() {
//     setLoading(true);
//     try {
//       const { data } = await axios.get('https://bigbrotherv01.runasp.net/api/Assistants/getall');
//       setAssistants(data);
//     } catch (err) {
//       setError('Failed to fetch assistants.');
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchAssistants();
//   }, []);

//   // 🔹 تحديث القيم عند الإدخال
//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   // 🔹 إضافة مساعد جديد وتحديث الجدول فورًا
//   async function addAssistant(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const { data } = await axios.post('https://bigbrotherv01.runasp.net/api/Assistants/add', formData);

//       // ✅ تحديث القائمة مباشرة بإضافة المساعد الجديد
//       setAssistants((prevAssistants) => [...prevAssistants, data]);

//       // ✅ تصفية الفورم بعد الإضافة
//       setFormData({ name: '', email: '', phone: '' });
//     } catch (err) {
//       setError('Failed to add assistant.');
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className='bg-sky-200 min-h-screen flex flex-col items-center pt-10 px-5 pl-[250px]'>
//       <h2 className='text-3xl font-bold text-gray-800 mb-6'>Assistants Management <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" transform="scale(1,-1)">
//   <g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
//     <path d="M31 44L42 28L22 12"/>
//     <path fill="#FFFFFF" d="M6 12L16 22L24 8L20 4L6 12Z"/>
//     <path d="M38 44H12"/>
//     <path d="M17 44V40"/>
//   </g>
// </svg>
// </h2>
      
//       {/* ✅ فورم إضافة مساعد جديد */}
//       <form onSubmit={addAssistant} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6'>
//         <h3 className='text-xl font-bold text-gray-700 mb-4'>Add New Assistant</h3>

//         <label className='block text-gray-700 font-semibold mb-2'>Name:</label>
//         <input
//           type='text'
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//           className='w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-sky-500'
//           placeholder='Enter Name'
//           required
//         />

//         <label className='block text-gray-700 font-semibold mb-2'>Email:</label>
//         <input
//           type='email'
//           name='email'
//           value={formData.email}
//           onChange={handleChange}
//           className='w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-sky-500'
//           placeholder='Enter Email'
//           required
//         />

//         <label className='block text-gray-700 font-semibold mb-2'>Phone:</label>
//         <input
//           type='text'
//           name='phone'
//           value={formData.phone}
//           onChange={handleChange}
//           className='w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-sky-500'
//           placeholder='Enter Phone'
//           required
//         />

//         <button type='submit' className='w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition duration-300'>
//           Add Assistant
//         </button>
//       </form>

//       {/* ✅ تحميل البيانات */}
//       {loading && <p className='text-blue-600 mt-4'>Loading...</p>}

//       {/* ✅ عرض الخطأ */}
//       {error && <p className='text-red-500 mt-4'>{error}</p>}

//       {/* ✅ عرض جدول المساعدين */}
//       <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md'>
//         <h3 className='text-2xl font-bold text-gray-800 mb-4'>Assistants List</h3>

//         {assistants.length > 0 ? (
//           <table className='w-full border-collapse border border-gray-300'>
//             <thead>
//               <tr className='bg-gray-200'>
//                 <th className='border border-gray-300 px-4 py-2'>ID</th>
//                 <th className='border border-gray-300 px-4 py-2'>Name</th>
//                 <th className='border border-gray-300 px-4 py-2'>Email</th>
//                 <th className='border border-gray-300 px-4 py-2'>Phone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {assistants.map((assistant) => (
//                 <tr key={assistant.id}>
//                   <td className='border border-gray-300 px-4 py-2'>{assistant.id}</td>
//                   <td className='border border-gray-300 px-4 py-2'>{assistant.name}</td>
//                   <td className='border border-gray-300 px-4 py-2'>{assistant.email}</td>
//                   <td className='border border-gray-300 px-4 py-2'>{assistant.phone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className='text-gray-600'>No assistants found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image1.jpg';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [studentSearchTerm, setStudentSearchTerm] = useState(""); // For student search
  
  // Fetch student data by ID
  async function getStudents(id) {
    try {
      let { data } = await axios.get(`https://bigbrotherv01.runasp.net/api/Asisstant/asisstants-for-course${id}`);
      console.log("student", data);
      setStudents(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents([]);
    }
  }

  // Handle student search
  const handleStudentSearch = (e) => {
    e.preventDefault();
    if (studentSearchTerm) {
      getStudents(studentSearchTerm);
    }
  };

  // Handle clearing student search input
  const handleStudentSearchChange = (e) => {
    const value = e.target.value;
    setStudentSearchTerm(value);
    if (!value) {
      setStudents([]); // Clear the table data if the search input is empty
    }
  };

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
          <li><span className="text-white">NAME OF COURSE: DATA BASE</span></li>
          <li><span className="text-white">CONTAIN: <span className="text-yellow-400">{students.length}</span> STUDENTS</span></li>
        </div>

        {/* Student Search Form */}
        <form className="max-w-md mx-auto mb-4" onSubmit={handleStudentSearch}>
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              className="block w-[90%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-[#D9D9D9]/49"
              placeholder="Enter student ID..."
              value={studentSearchTerm}
              onChange={handleStudentSearchChange}
            />
            <button
              type="submit"
              className="ml-2 bg-[#237618] text-white px-4 py-2 rounded-lg hover:bg-[#1a5c13] transition duration-200"
            >
              Search Student
            </button>
          </div>
        </form>

        {/* Students Table */}
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
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.name}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.id}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.phoneNumber}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.courses}</td>
                    <td className="px-4 py-2 border-2 border-[#6B4A4A]">{student.attendances}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center">
                    No assistants found.
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