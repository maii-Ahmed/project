// import React from 'react';
//  export default function Course() {
//    return (
//      <div className="container mx-auto p-6"> 
//      <div className="overflow-x-auto"> 
//       <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
//          <thead className="bg-gray-200">
//            <tr> 
//             <th className="px-4 py-2 border">STUDENT NAME</th>
//              <th className="px-4 py-2 border">STUDENT ID</th>
             
//              <th className="px-4 py-2 border">ASSISTANT ID</th>
//               <th className="px-4 py-2 border">COURSE ID</th> 
//               <th className="px-4 py-2 border">DATE</th> 
//               <th className="px-4 py-2 border">TIME</th> 
//               </tr> </thead>
//                <tbody>
//                  <tr className="bg-gray-100"> <td className="px-4 py-2 border">GDFRHR</td> <td className="px-4 py-2 border">3463464</td> <td className="px-4 py-2 border">J9DRGR88</td> <td className="px-4 py-2 border">J988</td> <td className="px-4 py-2 border">5/10/2022</td> <td className="px-4 py-2 border">11:11</td> </tr> <tr> <td className="px-4 py-2 border">GDFRUJHR</td> <td className="px-4 py-2 border">3463464</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> </tr> <tr className="bg-gray-100"> <td className="px-4 py-2 border">GDFRHR</td> <td className="px-4 py-2 border">3463464</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> </tr> <tr> <td className="px-4 py-2 border">GDFRYYYHR</td> <td className="px-4 py-2 border">3463464</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> <td className="px-4 py-2 border">-</td> </tr> </tbody> </table> </div> </div> ); }

import React from 'react'

export default function Course() {
  return (
   <>
   <div className='pl-[250px]'>
   
   <table className="mt-15  table-layout ">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
</div>
   </>
  )
}
