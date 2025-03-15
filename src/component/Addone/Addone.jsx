// import axios from 'axios';
// import { useFormik } from 'formik'
// import { useState } from 'react';

// import { useNavigate } from 'react-router-dom';

// export default function Addone() {
//     let[isloading, setIsLoading]= useState(false)
//   let Navigate=  useNavigate()
//  async function handelAdd(values){
//     setIsLoading(true)
//     console.log("values",values);
//   let res=await  axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
  
//     console.log(res);
   
//     Navigate("/Students")
//     setIsLoading(false)
// }
// let formikAdd =useFormik({
//     initialValues:{
//          name:"",
//         email:"",
//         password:"",
//         rePassword:"",
//         phone:"",
//     },
//     onSubmit: handelAdd
// })


//   return (
//     <div className='tap min-h-screen pt-25'>
//     <form onSubmit={formikAdd.handleSubmit} className='w-[50%] container mx-auto'>
    

//                <div>
//                     <label htmlFor="Name" className="block mb-2 text-sm font-medium text-black dark:text-white">Name</label>
//                     <input
//                         name="name"
//                         value={formikAdd.values.name}
//                         onChange={formikAdd.handleChange}
//                         onBlur={formikAdd.handleBlur}
//                         type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="John... " required
//                     />
//                 </div> 


//                 <div>
//                     <label htmlFor="Email" className="block mb-2 text-sm font-medium text-black dark:text-white">Email</label>
//                     <input
//                        name="email"
//                        value={formikAdd.values.email}
//                        onChange={formikAdd.handleChange}
//                        onBlur={formikAdd.handleBlur}
                       
//                         type="email" id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="example@mail.com" required
//                     />
//                 </div>


//                 <div>
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">password</label>
//                     <input
//                         name="password"
//                         value={formikAdd.values.password}
//                         onChange={formikAdd.handleChange}
//                         onBlur={formikAdd.handleBlur}
//                         type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="010.." required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-black dark:text-white">rePassword</label>
//                     <input
//                         name="rePassword"
//                         value={formikAdd.values.rePassword}
//                         onChange={formikAdd.handleChange}
//                         onBlur={formikAdd.handleBlur}
//                         type="password" id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="010.." required
//                     />
//                 </div>
                
//                 <div>
//                     <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black dark:text-white">phone</label>
//                     <input
//                         name="phone"
//                         value={formikAdd.values.phone}
//                         onChange={formikAdd.handleChange}
//                         onBlur={formikAdd.handleBlur}
//                         type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="010.." required
//                     />
//                 </div>
                
//                 <button type="submit" className="bg-green-900 text-white rounded-md mt-4 px-4 py-2">
                   
//                 { isloading ?<i className='fas fa-spin fa-spinner'></i>:"Add "}  </button>
//     </form>

//     </div>
//   )
// }













import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import image from '../../assets/image1.jpg';

export default function Addone() {
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  async function handleAdd(values) {
    setIsLoading(true);

    try {
      let res = await axios.post("https://bigbrotherv01.runasp.net/api/Student/addstudent", values);

      console.log("Student Added:", res.data);
   

    
      // بعد إضافة الطالب بنجاح، نرجع لصفحة الطلاب
      navigate("/Students");

    } catch (error) {
      console.error("Error adding student:", error);
    }

    setIsLoading(false);
  }

  const formikAdd = useFormik({
    initialValues: {
      studentName: "",
      StudentID: "",
      EMAIL: "",
      DEPAPTMENT:"",
      LEVEL:"",
      PHONENUMBER:"",

    },
    onSubmit: handleAdd,
  });

  return (
    <div className='tap min-h-screen  montserrat-subrayada-bold pl-[250px]'>
      <img src={image} className='w-[25px] mb-1' alt="" />
      <h2 className='text-white border-b-[2px] w-[7%] ms-4 border-b-amber-50'>STUDENTS</h2>
      <h2 className='text-white text-xl ms-17 mt-6 mb-8'>  <span className='text-white text-4xl '>  . </span> ADD ONE</h2>
      <form onSubmit={formikAdd.handleSubmit} className='w-[85%] container mx-auto'>
    

      
    <div class="grid gap-2 mb-6 md:grid-cols-2 ">
      
    <div class="flex items-center space-x-3 mb-4">
    <label for="first_name" class="text-sm font-medium text-yellow-300  dark:text-white whitespace-nowrap ">
    <i className="fa fa-pen text-white me-2"></i>  studentName   <span className='ms-2 text-2xl'>:</span>
    </label>
    <input
    name="studentName"
    value={formikAdd.values.studentName}
    onChange={formikAdd.handleChange}
    onBlur={formikAdd.handleBlur}
    
    type="text" id="first_name" 
        class="bg-gray-50 border me-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
               focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
        placeholder="...................." required />
</div>

<div class="flex items-center space-x-3 mb-4 ms-4">
    <label for="first_name" class="text-sm font-medium text-yellow-300  dark:text-white whitespace-nowrap">
    <i className="fa fa-pen text-white me-2"></i>  StudentID   <span className='ms-2 text-2xl'>:</span>
    </label>
    <input 
    name="StudentID"
    value={formikAdd.values.StudentID}
    onChange={formikAdd.handleChange}
    onBlur={formikAdd.handleBlur}
    type="text" id="first_name" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
               focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%]"
        placeholder="...................." required />
</div>
<div class="flex items-center space-x-3 mt-4">
    <label for="first_name" class="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
    <i className="fa fa-pen text-white me-2"></i>  EMAIL   <span className='ms-2 text-2xl'>:</span>
    </label>
    <input 
    
    name="EMAIL"
    value={formikAdd.values.EMAIL}
    onChange={formikAdd.handleChange}
    onBlur={formikAdd.handleBlur}
    type="text" id="first_name" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
               focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
        placeholder="...................." required />
</div>
<div class="flex items-center space-x-3 mt-4 ms-4">
    <label for="first_name" class="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
    <i className="fa fa-pen text-white me-2"></i>  DEPAPTMENT   <span className='ms-2 text-2xl'>:</span>
    </label>
    <input
     name="DEPAPTMENT"
     value={formikAdd.values.DEPAPTMENT}
     onChange={formikAdd.handleChange}
     onBlur={formikAdd.handleBlur}
    type="text" id="first_name" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
               focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50%]"
        placeholder="...................." required />
</div>
<div class="flex items-center space-x-3 mt-6">
    <label for="first_name" class="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
    <i className="fa fa-pen text-white me-2"></i>LEVEL   <span className='ms-2 text-2xl'>:</span>
    </label>
    <input 
    name="LEVEL"
    value={formikAdd.values.LEVEL}
    onChange={formikAdd.handleChange}
    onBlur={formikAdd.handleBlur}
    type="text" id="first_name" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
               focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[35%]"
        placeholder=".................... " required />
</div>

<div class="flex items-center space-x-3 mt-6 ms-4">
    <label for="first_name" class="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
    <i className="fa fa-pen text-white me-2"></i>  PHONENUMBER  <span className='ms-2 text-2xl'>:</span>
    </label>
    <input
    name="PHONENUMBER"
    value={formikAdd.values.PHONENUMBER}
    onChange={formikAdd.handleChange}
    onBlur={formikAdd.handleBlur}
    type="text" id="first_name" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
               focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
        placeholder=".................." required />
</div>
 {/* <div>
                     <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black dark:text-white">phone</label>
                     <input
                         name="phone"
                         value={formikAdd.values.phone}
                         onChange={formikAdd.handleChange}
                         onBlur={formikAdd.handleBlur}
                         type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="010.." required
                     />
                 </div>
*/}

         
        </div>
     
      </form>
      <div className="flex justify-center items-center mt-18  ">
  <button
    type="submit"
    className=" bg-green-900 text-white rounded-md px-9 py-2   w-[180px]"
  >
    {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "Add" }<i className="fa fa-pen ms-13"></i>
  </button>
</div>

    </div>
    
    
  );
}
