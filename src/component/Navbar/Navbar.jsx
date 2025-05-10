// import React from 'react';
// import { Link } from 'react-router-dom';
// import image1 from "../../assets/loogo.jpg";

// export default function Navbar() {
//   return (
//     <nav 
//       className="montserrat-subrayada-bold bg-white shadow-2xl fixed left-0 top-0 h-screen 
//       w-[70px] md:w-[250px] flex flex-col items-center py-6 rounded-r-2xl 
//       transition-all duration-300 group hover:w-[250px]"
//     >
//       {/* 🔹 صورة اللوجو */}
//       <div className="mb-10">
//         <img
//           src={image1}
//           className="w-[70px] h-[70px] border-[3px] border-gray-400 rounded-full transition-all duration-300 group-hover:w-[80px] group-hover:h-[80px]"
//           alt="Logo"
//         />
//       </div>

//       {/* 🔹 القائمة الجانبية */}
//       <ul className="flex flex-col gap-6 text-black w-full text-center">
//         <li className="text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
//           <Link to="" className="flex items-center gap-2">
//             <i className="fa fa-list text-xl"></i>
//             <span className="hidden md:block group-hover:block">ATTANDANCE</span>
//           </Link>
//         </li>
//         <li className="hover:text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
//           <Link to="/Students" className="flex items-center gap-2">
//             <i className="fa fa-user-graduate text-xl"></i>
//             <span className="hidden md:block group-hover:block">Students</span>
//           </Link>
//         </li>
//         <li className="hover:text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
//           <Link to="/Course" className="flex items-center gap-2">
//             <i className="fa fa-book text-xl"></i>
//             <span className="hidden md:block group-hover:block">Course</span>
//           </Link>
//         </li>
//         <li className="hover:text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
//           <Link to="/Asisstants" className="flex items-center gap-2">
//             <i className="fa fa-chalkboard-teacher text-xl"></i>
//             <span className="hidden md:block group-hover:block">Asisstants</span>
//           </Link>
//         </li>
//       </ul>

//       {/* 🔹 أيقونة المستخدم */}
//       <div className="mt-auto mb-6 flex flex-col items-center">
//         <div className="w-[30px] h-[30px] flex items-center justify-center border-2 border-gray-500 rounded-full transition-all duration-300 group-hover:w-[40px] group-hover:h-[40px]">
//           <i className="fa fa-user text-gray-700"></i>
//         </div>
//         <h2 className="hidden md:block group-hover:block text-gray-700 font-bold">AMR</h2>
//       </div>
//     </nav>
//   );
// }
// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import image1 from "../../assets/loogo.jpg"
// export default function Navbar() {
  
//   return (
//     <>
    
//     <nav className='montserrat-subrayada-bold  bg-white rounded-bl-2xl rounded-br-2xl py-1 fixed top-0 end-0 start-0 shadow-2xl' >
   
//    <div className=' container  flex-col md:flex-row gap-4 item-center   item-center flex justify-between'>
//    <div className='flex ms-7 '>
//       <img src={image1} className='w-[60px] h-[60px] border-[3px] border-gray-400 rounded-full '/>
   
// <ul className='flex  gap-14 ms-3 text-black mt-4 '>
// <li className=' text-[#4B1A1A] hover:text-[#4B1A1A] hover:scale-110 transition-transform duration-700 ms-8'><Link to="">ATTANDANCE</Link></li>
// <li className='hover:text-[4B1A1A] hover:scale-110 transition-transform duration-700 '><Link to="/Students">Students</Link></li>
// <li className='hover:text-[4B1A1A] hover:scale-110 transition-transform duration-700'><Link to="/Course">Course</Link></li>
// <li className='hover:text-[4B1A1A] hover:scale-110 transition-transform duration-700'><Link to="/Asisstants">Asisstants</Link></li>


// </ul>

  
//    </div>
//    <ul className='flex gap-2 mt-4 '>

// <li className='ms-4 border-3 border-boild w-[30px] h-[30px] rounded-full'><i className="fa fa-user ms-1 " aria-hidden="true"></i></li>
// <h2 className='mt-1 '>AMR</h2>
// </ul>
  
// </div>

// </nav>

//     </>
//   )
// }
// import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image1 from "../../assets/loogo.jpg";
import { AuthContext } from '../../ContextProvider/ContextProvider';

export default function Navbar() {
  // let{token ,setToken}=useContext(AuthContext)
    //  let{token,setToken}=  useContext(Context)
 let Navigate=   useNavigate()
  function logOut(){
    Navigate("")
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <nav className='montserrat-subrayada-bold bg-white rounded-bl-2xl rounded-br-2xl py-1 z-50 fixed top-0 end-0 start-0 shadow-2xl'>
      <div className='container flex flex-wrap md:flex-nowrap items-center p-2'>

        {/* اللوجو وزر القائمة للشاشات الصغيرة */}
        <div className='flex items-center w-full md:w-auto'>
          <img src={image1} className='w-[50px] h-[50px] border-[3px] border-gray-400 rounded-full ms-2' alt="Logo" />
          
          {/* زر القائمة في الشاشات الصغيرة */}
          <button className="md:hidden text-black text-2xl ml-auto" onClick={() => document.getElementById('menu').classList.toggle('hidden')}>
            ☰
          </button>
        </div>

        {/* القائمة الرئيسية */}
       <ul id="menu" className='hidden md:flex flex-col md:flex-row gap-4 md:gap-14 text-black mt-2 md:mt-0 md:ml-4 text-left'>
          <li className='text-[#4B1A1A] hover:scale-110 transition-transform duration-700 ms-4'>
            <Link to="/Attandance">ATTENDANCE</Link>
          </li>
          <li className='hover:text-[#4B1A1A] hover:scale-110 transition-transform duration-700'>
            <Link to="/Students">Students</Link>
          </li>
          <li className='hover:text-[#4B1A1A] hover:scale-110 transition-transform duration-700'>
            <Link to="/Course">Course</Link>
          </li>
          <li className='hover:text-[#4B1A1A] hover:scale-110 transition-transform duration-700'>
            <Link to="/Asisstants">Asisstants</Link>
          </li>
         
        </ul>

        {/* أيقونة المستخدم */}
        <div className='flex items-center gap-2 mt-2 md:mt-0 ml-auto'>
          <div className='border-[3px] border-gray-400 w-[30px] h-[30px] flex items-center justify-center rounded-full'>
            <i className="fa fa-user"></i>
          </div>
          <h2>AMR</h2>
         
         <h2><span onClick={logOut}> logout</span></h2> 
        <>
          
          <h2><Link to={""}>Login</Link></h2> 
       
  
        </>
       
          
         
   
          
        </div>
      </div>
    </nav>
  );
}

