import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/loogo.jpg";

export default function Navbar() {
  return (
    <nav 
      className="montserrat-subrayada-bold bg-white shadow-2xl fixed left-0 top-0 h-screen 
      w-[70px] md:w-[250px] flex flex-col items-center py-6 rounded-r-2xl 
      transition-all duration-300 group hover:w-[250px]"
    >
      {/* 🔹 صورة اللوجو */}
      <div className="mb-10">
        <img
          src={image1}
          className="w-[70px] h-[70px] border-[3px] border-gray-400 rounded-full transition-all duration-300 group-hover:w-[80px] group-hover:h-[80px]"
          alt="Logo"
        />
      </div>

      {/* 🔹 القائمة الجانبية */}
      <ul className="flex flex-col gap-6 text-black w-full text-center">
        <li className="text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
          <Link to="" className="flex items-center gap-2">
            <i className="fa fa-list text-xl"></i>
            <span className="hidden md:block group-hover:block">ATTANDANCE</span>
          </Link>
        </li>
        <li className="hover:text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
          <Link to="/Students" className="flex items-center gap-2">
            <i className="fa fa-user-graduate text-xl"></i>
            <span className="hidden md:block group-hover:block">Students</span>
          </Link>
        </li>
        <li className="hover:text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
          <Link to="/Course" className="flex items-center gap-2">
            <i className="fa fa-book text-xl"></i>
            <span className="hidden md:block group-hover:block">Course</span>
          </Link>
        </li>
        <li className="hover:text-[#4B1A1A] ms-4 mb-4 hover:scale-110 transition-transform duration-300 flex items-center justify-center md:justify-start">
          <Link to="/Asisstants" className="flex items-center gap-2">
            <i className="fa fa-chalkboard-teacher text-xl"></i>
            <span className="hidden md:block group-hover:block">Asisstants</span>
          </Link>
        </li>
      </ul>

      {/* 🔹 أيقونة المستخدم */}
      <div className="mt-auto mb-6 flex flex-col items-center">
        <div className="w-[30px] h-[30px] flex items-center justify-center border-2 border-gray-500 rounded-full transition-all duration-300 group-hover:w-[40px] group-hover:h-[40px]">
          <i className="fa fa-user text-gray-700"></i>
        </div>
        <h2 className="hidden md:block group-hover:block text-gray-700 font-bold">AMR</h2>
      </div>
    </nav>
  );
}
