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
      'https://bigbrotherv01.runasp.net/api/Attendace/getallattendace',
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
      {/* ✅ تعديل المسافة بحيث تكون الصفحة بجانب النافبار ومتجاوبة */}
      <div className="tap min-h-screen montserrat-subrayada-bold pl-[70px] md:pl-[250px]">
        <div className="flex flex-col justify-center items-center space-y-10">
          <h2 className="mt-10 text-[#FFFFFF]/77 text-3xl font-bold border-b-4 pb-2">
            ATTENDANCE
          </h2>

          {/* ✅ تحسين عرض الجدول ليكون متجاوبًا مع الشاشات الصغيرة */}
          <div className="w-[95%] md:w-[100%] lg:w-[80%] mx-auto border-8 border-[#6B4A4A] rounded-xl">
            <div className="overflow-x-auto">
              <div className="max-h-[90vh] overflow-y-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead className="bg-[#FFFFFF]/69 text-white text-base">
                    <tr className="text-center">
                      <th className="px-6 py-4 border border-[#6B4A4A]">Student Name</th>
                      <th className="px-6 py-4 border border-[#6B4A4A]">Student ID</th>
                      <th className="px-6 py-4 border border-[#6B4A4A]">Course ID</th>
                      <th className="px-6 py-4 border border-[#6B4A4A]">Assistant ID</th>
                      <th className="px-6 py-4 border border-[#6B4A4A]">Date</th>
                      <th className="px-6 py-4 border border-[#6B4A4A]">Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#D9D9D9]/40 border-t-gray-500 text-[19px]">
                    {attendance?.map((p, i) => (
                      <tr key={i} className="text-center">
                        <td className="border-4 px-8 py-7 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.studentName}</td>
                        <td className="border-4 px-8 py-7 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.studentId}</td>
                        <td className="border-4 px-8 py-7 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.courseId}</td>
                        <td className="border-4 px-8 py-7 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.asisstantId}</td>
                        <td className="border-4 px-8 py-7 border-[#000000]/52 border-t-4 border-t-[#6B4A4A]">{p.date}</td>
                        <td className="border-4 px-8 py-7 border-[#000000]/52 text-black border-t-4 border-t-[#6B4A4A]">{p.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
