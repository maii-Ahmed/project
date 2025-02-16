import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image1 from "../../assets/loogo.jpg"
export default function Navbar() {
  
  return (
    <>
    
    <nav className='montserrat-subrayada-bold  bg-white rounded-bl-2xl rounded-br-2xl py-1 fixed top-0 end-0 start-0 shadow-2xl' >
   
   <div className=' container  flex-col md:flex-row gap-4 item-center   item-center flex justify-between'>
   <div className='flex ms-7 '>
      <img src={image1} className='w-[60px] h-[60px] border-[3px] border-gray-400 rounded-full '/>
   
<ul className='flex  gap-14 ms-3 text-black mt-4 '>
<li className=' text-[#4B1A1A] hover:text-[#4B1A1A] hover:scale-110 transition-transform duration-700 ms-8'><Link to=" ">ATTANDANCE</Link></li>
<li className='hover:text-[4B1A1A] hover:scale-110 transition-transform duration-700 '><Link to="/Students">Students</Link></li>
<li className='hover:text-[4B1A1A] hover:scale-110 transition-transform duration-700'><Link to="/Course">Course</Link></li>
<li className='hover:text-[4B1A1A] hover:scale-110 transition-transform duration-700'><Link to="/Asisstants">Asisstants</Link></li>


</ul>

  
   </div>
   <ul className='flex gap-2 mt-4 '>

<li className='ms-4 border-3 border-boild w-[30px] h-[30px] rounded-full'><i className="fa fa-user ms-1 " aria-hidden="true"></i></li>
<h2 className='mt-1 '>AMR</h2>
</ul>
  
</div>

</nav>
    
    </>
  )
}
