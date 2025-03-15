
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Students() {
//   const [students, setStudents] = useState(null);
//   const [file, setFile] = useState(null); // الحالة الخاصة بالملف

//   // جلب بيانات الطلاب
//   async function getStudents() {
//     let { data } = await axios.get("https://bigbrotherv01.runasp.net/api/Student/getallstudents");
//     setStudents(data);
//   }

//   // تنفيذ جلب البيانات عند تحميل المكون
//   useEffect(() => {
//     getStudents();
//     const interval = setInterval(() => {
//       getStudents();
//     }, 5000);
//     return () => clearInterval(interval); // تنظيف الفترة الزمنية عند التفريغ
//   }, []);

//   // لتعامل مع رفع الملف
//   const handleFileUpload = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       console.log('File selected:', selectedFile);
//     }
//   };

//   // رفع الملف إلى الخادم
//   const uploadFile = async () => {
//     if (!file) {
//       alert("Please select a file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('https://bigbrotherv01.runasp.net/api/Student/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
    
//     <div className="min-h-screen pt-25 tap montserrat-subrayada-bold">
//       <h2 className='text-white border-b-[2px] w-[6%] ms-4 border-b-amber-50'>STUDENTS</h2>
//       <div  className='flex flex-col items-center justify-start' >
       
//        <div className='grid grid-cols-2'>
//         <div className='me-7'>
//         <input 
//           type="file" 
//           className="hidden" 
//           id="file-upload" 
//           onChange={handleFileUpload} 
//         />
//         <label 
//           htmlFor="file-upload" 
//           className="bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white cursor-pointer"
//         >
//       Upload File    <i class="fa-solid fa-arrow-up-from-bracket ms-2"></i>
//         </label>
//         <div className="flex justify-center gap-4 mt-4">
//           <button 
//             onClick={uploadFile} 
//             className="hidden"  // إخفاء الزر
//           >
//             Upload to Server
//           </button>

//           </div>
//         </div>

//         <div>
//         <Link 
//             className='bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white'
//             to="/Addone"
//           >
//             ADD ONE <i class="fa fa-pen ms-3"></i>
//           </Link>
//         </div>
//        </div>
        
//         {/* زر رفع الملف المخفي */}
//         {/* <input 
//           type="file" 
//           className="hidden" 
//           id="file-upload" 
//           onChange={handleFileUpload} 
//         />
//         <label 
//           htmlFor="file-upload" 
//           className="bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white cursor-pointer"
//         >
//           Upload File
//         </label> */}
       

//         {/* حاوية الأزرار المتجاورة */}
//         {/* <div className="flex justify-center gap-4 mt-4">
//           <button 
//             onClick={uploadFile} 
//             className="hidden"  // إخفاء الزر
//           >
//             Upload to Server
//           </button>

//           </div> */}
          
//           {/* <label 
//           htmlFor="file-upload" 
//           className="bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white cursor-pointer"
//         >
//           Upload File
//         </label> */}



//           {/* <Link 
//             className='bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white'
//             to="/Addone"
//           >
//             ADD ONE
//           </Link> */}
       

//       </div>   

//       <div className='ms-15 mt-9'>
//         <li><span className='text-white'>NAME OF COURSE: DATA BASE</span> </li>
//         <li><span className='text-white'>CONTAIN: <span className='text-yellow-400'>70</span> STUDENT</span> </li>
//       </div>

//       <form className="max-w-md mx-auto">   
//         <label htmlFor="default-search" className="text-sm font-medium text-black sr-only dark:text-black">Search</label>
//         <div className="relative">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//           </div>
//           <input 
//             type="search" 
//             id="default-search" 
//             className="block w-[90%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-red-500 dark:border-gray-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//             placeholder="Search ..........................." 
//             required 
//           />
//         </div>
//       </form>

//       {/* عرض الجدول */}
     
//       <table className="w-[90%] table-auto bg-white text-gray-700 border-collapse border-5 border-[#6B4A4A] mx-auto mt-5">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2 border-b-2 border-black">
//               <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">STUDENT NAME</span>
//             </th>
//             <th className="px-4 py-2 border-2 border-[#6B4A4A] border-b-black">
//               <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1"> STUDENT ID</span>
//             </th>
//             <th className="border-2 border-e-[#6B4A4A]">
//               <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">Email</span>
//             </th>
//             <th className="border-2 border-e-[#6B4A4A]">
//               <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">PHONE NUMBER</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {students?.map((student, index) => (
//             <tr key={index}>
//               <td className="px-4 py-2 border border-[#6B4A4A]">{student.name}</td>
//               <td className="px-4 py-2 border border-[#6B4A4A]">{student.id}</td>
//               <td className="px-4 py-2 border border-[#6B4A4A]">{student.email}</td>
//               <td className="px-4 py-2 border border-[#6B4A4A]">{student.phoneNumber}</td>
//             </tr>
//           ))}
//         </tbody>
      
//       </table>
//      </div>
    
//   );
// }












import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image1.jpg';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [file, setFile] = useState(null);
  // const [searchTerm, setSearchTerm] = useState("");
  

  // 🟢 جلب بيانات الطلاب
  async function getStudents() {
    try {
      let { data } = await axios.get("https://bigbrotherv01.runasp.net/api/Student/getallstudents");
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  // 🔄 تحميل البيانات عند فتح الصفحة + تحديثها كل 5 ثوانٍ
  useEffect(() => {
    getStudents();
    const interval = setInterval(() => {
      getStudents();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  // 📂 رفع ملف
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log('File selected:', selectedFile);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://bigbrotherv01.runasp.net/api/Student/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('File uploaded successfully:', response.data);
      alert("File uploaded successfully!");
      setFile(null); // إعادة تعيين الملف بعد الرفع

    } catch (error) {
      console.error('Error uploading file:', error);
      alert("Error uploading file. Check the console for details.");
    }
  };

  return (
    <div className="min-h-screen  tap montserrat-subrayada-bold  pl-[250px]">
<img src={image} className='w-[25px] mb-1' alt="" />
      <h2 className='text-white border-b-[2px] w-[6%] ms-4 border-b-amber-50'>STUDENTS</h2>
      
     <div className='w-full mt-10'>

     <div className='flex flex-col items-center justify-start'>
        <div className='grid grid-cols-2'>
          {/* زر اختيار الملف + رفعه */}
          <div className='me-7'>
            <input type="file" className="hidden" id="file-upload" onChange={handleFileUpload} />
            <label htmlFor="file-upload" className="bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white cursor-pointer">
              Select File <i className="fa-solid fa-arrow-up-from-bracket ms-2"></i>
            </label>

            {/* زر رفع الملف */}
            {file && (
              <button 
                onClick={uploadFile} 
                className="bg-blue-600 text-white px-6 py-2 rounded mt-2 ml-2"
              >
                Upload File
              </button>
            )}
          </div>

          {/* زر إضافة طالب جديد */}
          <div>
            <Link className='bg-green-800 rounded-[8px] px-8 py-2 text-sm text-white' to="/Addone"  >
              ADD ONE <i className="fa fa-pen ms-3"></i>
            </Link>
           
          </div>
        </div>
      </div>

      {/* 🟡 معلومات عامة */}
      <div className='ms-15 mt-9'>
        <li><span className='text-white'>NAME OF COURSE: DATA BASE</span></li>
        <li><span className='text-white'>CONTAIN: <span className='text-yellow-400'>{students.length}</span> STUDENTS</span></li>
      </div>

      {/* 🔍 البحث */}
      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            className="block w-[90%] p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search for a student..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>

     </div>
      {/* 📋 جدول عرض الطلاب */}
     {/* 📋 جدول عرض الطلاب */}
<div className="w-full md:w-[80%] mx-auto overflow-x-auto max-h-[90vh]">
  <table className="w-full bg-white  text-gray-700 border-collapse border-5 border-[#6B4A4A] mx-auto mt-5 min-w-[600px]">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 border-b-2 border-black">
          <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">STUDENTNAME</span>
        </th>
        <th className="px-4 py-2 border-2 border-[#6B4A4A] border-b-black">
          <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">STUDENTID</span>
        </th>
        <th className="border-2 border-e-[#6B4A4A]">
          <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">EMAIL</span>
        </th>
        <th className="border-2 border-e-[#6B4A4A]">
          <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">DEPAPTMENT</span>
        </th>
        <th className="border-2 border-e-[#6B4A4A]">
          <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">LEVEL</span>
        </th>
        <th className="border-2 border-e-[#6B4A4A]">
          <span className="inline-block rounded-b-lg bg-[#6B4A4A] text-black px-2 py-1">PHONENUMBER</span>
        </th>
      </tr>
    </thead>
    <tbody className="text-center">
      {students
        // .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase())) // البحث عن الطلاب
        .map((student, index) => (
          <tr key={index} className="border">
            <td className="px-4 py-2 border border-[#6B4A4A]">{student.name}</td>
            <td className="px-4 py-2 border border-[#6B4A4A]">{student.id}</td>
            <td className="px-4 py-2 border border-[#6B4A4A]">{student.email}</td>
           
            <td className="px-4 py-2 border border-[#6B4A4A]">jjjj</td>
            <td className="px-4 py-2 border border-[#6B4A4A]">...</td>
            <td className="px-4 py-2 border border-[#6B4A4A]">{student.phoneNumber}</td>
          </tr>
        ))}
    </tbody>
  </table>
</div>

    </div>
  
);
}