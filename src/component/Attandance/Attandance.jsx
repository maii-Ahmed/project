// //  import React, { useEffect, useState } from 'react';
// //   import axios from 'axios';
// //  export default function Attandance() {
// //      let [products, setProducts] = useState(null);

     

    
// //     async function getProduct() {
        
// //        let {data} = await axios.get("http://bigbrotherv01.runasp.net/api/Attendace/getallattendace");
// //        console.log(data); 
// //            setProducts(data); 
        
// //      }
    
// //      useEffect(() => {
// //          getProduct()
// //      }, []) 


// //    return (
// //      <>
// //      {/* bg-gradient-to-t from-[#1D1C1C]  to-[#4B1A1A] */}

// // <div className=' overflow-hidden tap h-64 min-h-screen montserrat-subrayada-bold'>
  

// //  <div className='mt-15  flex flex-col justify-center items-center space-y-5 '>
// //  <h2 className='mt-10  border-b-2'>ATTANDANCE</h2>
         
// //    <div className=" overflow-auto  max-h-[80vh]  ">
// //      <table className="styled-table  w-[75%] mx-auto mt-30 ">
// //        <thead className='bg-[#D9D9D9]   shadow-2xl mb-3' >
       
// //         <tr className='border-b-2 border-[#D9E348] '>
// //            <th className='rounded-full ' >studentName</th>
// //            <th className='rounded-full border-s-2'>studentId</th>
// //            <th className='rounded-full border-s-2'>courseId</th> 
// //            <th className='rounded-full border-s-2'>asisstantId</th>
// //            <th className='rounded-full border-s-2' >date</th> 
// //            <th className= 'rounded-full border-s-2' >time</th> 
// //          </tr>
       
// //        </thead>
// //        <tbody className='text-white ' >
// //          {products?.map((p,i)=><tr key={i}  className='border-e-none'>
// //            <td className='border-b-2 border-[#D9E348]'>{p.studentName}</td>
// //            <td className='border border-[#D9E348]'>{p.studentId}</td>
// //            <td className='border border-[#D9E348]'>{p.courseId}</td>
// //            <td className='border border-[#D9E348]'>{p.asisstantId}</td>
// //            <td className='border border-[#D9E348]'>{p.date}</td>
// //            <td className='border-b-2 border-[#D9E348]'>{p.time}</td>
// //          </tr>)}
        
        
// //        </tbody>
       
// //      </table>
// //    </div>
// //  </div>
 
// //  </div>
 
// //      </>
// //    );
// //  }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// export default function Attandance() {
//  let [attendance, setAttendance] = useState(null);

//  async function getProduct() {
//   let { data } = await axios.get(
//    'http://bigbrotherv01.runasp.net/api/Attendace/getallattendace',
//   );
//   console.log(data);
//   setAttendance(data);
//  }

//  useEffect(() => {
//   getProduct();
//   const interval = setInterval(() => {
//    getProduct();
//   }, 5000);
//   return () => clearInterval(interval);
//  }, []);

//  return (
//   <>
//    {/* bg-gradient-to-t from-[#1D1C1C]  to-[#4B1A1A] */}

//    <div className=' overflow-hidden tap h-64 min-h-screen montserrat-subrayada-bold'>
//     <div className='mt-15  flex flex-col justify-center items-center space-y-5 '>
//      <h2 className='mt-10  border-b-2'>ATTENDANCE</h2>

//      <div className=' overflow-auto  max-h-[80vh]  '>
//       <table className='styled-table  w-[75%] mx-auto mt-30 '>
//        <thead className='bg-[#D9D9D9]   shadow-2xl mb-3'>
//         <tr className='border-b-2 border-[#D9E348] '>
//          <th className='rounded-full '>studentName</th>
//          <th className='rounded-full border-s-2'>studentId</th>
//          <th className='rounded-full border-s-2'>courseId</th>
//          <th className='rounded-full border-s-2'>asisstantId</th>
//          <th className='rounded-full border-s-2'>date</th>
//          <th className='rounded-full border-s-2'>time</th>
//         </tr>
//        </thead>
//        <tbody className='text-white '>
//         {attendance?.map((p, i) => (
//          <tr key={i} className='border-e-none'>
//           <td className='border-b-2 border-[#D9E348]'>
//            {p.studentName}
//           </td>
//           <td className='border border-[#D9E348]'>{p.studentId}</td>
//           <td className='border border-[#D9E348]'>{p.courseId}</td>
//           <td className='border border-[#D9E348]'>{p.asisstantId}</td>
//           <td className='border border-[#D9E348]'>{p.date}</td>
//           <td className='border-b-2 border-[#D9E348]'>{p.time}</td>
//          </tr>
//         ))}
//        </tbody>
//       </table>
//      </div>
//     </div>
//    </div>
//   </>
//  );
// }

//  import React, { useEffect, useState } from 'react';
//   import axios from 'axios';
//  export default function Attandance() {
//      let [products, setProducts] = useState(null);

     

    
//     async function getProduct() {
        
//        let {data} = await axios.get("http://bigbrotherv01.runasp.net/api/Attendace/getallattendace");
//        console.log(data); 
//            setProducts(data); 
        
//      }
    
//      useEffect(() => {
//          getProduct()
//      }, []) 


//    return (
//      <>
//      {/* bg-gradient-to-t from-[#1D1C1C]  to-[#4B1A1A] */}

// <div className=' overflow-hidden tap h-64 min-h-screen montserrat-subrayada-bold'>
  

//  <div className='mt-15  flex flex-col justify-center items-center space-y-5 '>
//  <h2 className='mt-10  border-b-2'>ATTANDANCE</h2>
         
//    <div className=" overflow-auto  max-h-[80vh]  ">
//      <table className="styled-table  w-[75%] mx-auto mt-30 ">
//        <thead className='bg-[#D9D9D9]   shadow-2xl mb-3' >
       
//         <tr className='border-b-2 border-[#D9E348] '>
//            <th className='rounded-full ' >studentName</th>
//            <th className='rounded-full border-s-2'>studentId</th>
//            <th className='rounded-full border-s-2'>courseId</th> 
//            <th className='rounded-full border-s-2'>asisstantId</th>
//            <th className='rounded-full border-s-2' >date</th> 
//            <th className= 'rounded-full border-s-2' >time</th> 
//          </tr>
       
//        </thead>
//        <tbody className='text-white ' >
//          {products?.map((p,i)=><tr key={i}  className='border-e-none'>
//            <td className='border-b-2 border-[#D9E348]'>{p.studentName}</td>
//            <td className='border border-[#D9E348]'>{p.studentId}</td>
//            <td className='border border-[#D9E348]'>{p.courseId}</td>
//            <td className='border border-[#D9E348]'>{p.asisstantId}</td>
//            <td className='border border-[#D9E348]'>{p.date}</td>
//            <td className='border-b-2 border-[#D9E348]'>{p.time}</td>
//          </tr>)}
        
        
//        </tbody>
       
//      </table>
//    </div>
//  </div>
 
//  </div>
 
//      </>
//    );
//  }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Attandance() {
 let [attendance, setAttendance] = useState(null);

 async function getProduct() {
  let { data } = await axios.get(
   'http://bigbrotherv01.runasp.net/api/Attendace/getallattendace',
  );
  console.log(data);
  setAttendance(data);
 }

 useEffect(() => {
  getProduct();
  const interval = setInterval(() => {
   getProduct();
  }, 5000);
  return () => clearInterval(interval);
 }, []);

 return (
  <>
   
   <div className=' overflow-hidden tap h-64 min-h-screen montserrat-subrayada-bold  '>
    <div className='mt-15  flex flex-col justify-center items-center space-y-5 '>
     <h2 className='mt-10 text-[#FFFFFF]/77  border-b-2'>ATTENDANCE</h2>
     
     <div className=' overflow-auto  max-h-[80vh]  '>

     <div className=" p-4 bg-[#FFFFFF]/69    rounded-t-2xl border-5 border-[#6B4A4A]">
  <nav >

  <thead className=' text-[#181818]/100   shadow-2xl   '>
        <tr className=' '>
        
         <th className=' px-3 border-2-red-500  '>studentName</th>
         <th className=' px-2  '>studentId</th>
         <th className='px-2 '>courseId</th>
         <th className='px-8 '>asisstantId</th>
         <th className='px-13'>date</th>
         <th className=' px-17'>time</th>
        </tr>
       </thead> 
    
  </nav>
</div>
     
     <table className=' styled-table  w-[100%] mx-auto mt-3  border-6 border-[#6B4A4A] '>
        
     

       <tbody className='text-[#181818]/100 border-t-4  bg-[#D9D9D9]/30   border-t-gray-500 ' >
       
        {attendance?.map((p, i) => (
         <tr key={i} className=' '>
          <td className=' border-4 px-0.5  border-[#000000]/52 border-s-amber-300 border-s-4 '>
           {p.studentName}
          </td>
          <td className='p-10 border-4   border-[#000000]/52  '>{p.studentId}</td>
          <td className='p-10 border-4 border-[#000000]/52 '>{p.courseId}</td>
          <td className='p-9 border-4 border-[#000000]/52 '>{p.asisstantId}</td>
          <td className='p-7 w-0.5 border-4 border-[#000000]/52'>{p.date}</td>
          <td className= 'p-6 border-4 border-e-4  border-[#000000]/52 border-e-green-300 '>{p.time}</td>
         </tr >
        ))}
       </tbody>
      
      </table>
     </div>
    
    </div>
   </div>
  </>
 );
}