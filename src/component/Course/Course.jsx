// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import image from '../../assets/image1.jpg';

// export default function Course() {
//   const [isLoading, setIsLoading] = useState(false);

//   async function handleAdd(values) {
//     setIsLoading(true);

//     // Convert specific fields to numbers before sending the request
//     const payload = {
//       ...values,
//       id: parseInt(values.id, 10), // Convert id to number
//       dayOfCourse: parseInt(values.dayOfCourse, 10), // Convert dayOfCourse to number
//       instructorId: parseInt(values.instructorId, 10), // Convert instructorId to number
//     };

//     try {
//       let res = await axios.post("https://bigbrotherv01.runasp.net/api/Course/add", payload);

//       console.log("Course Added:", res.data);
//     } catch (error) {
//       console.error("Error adding course:", error);
//     }

//     setIsLoading(false);
//   }

//   const formikAdd = useFormik({
//     initialValues: {
//       name: "",
//       id: 0,
//       startFrom: "",
//       endIn: "",
//       dayOfCourse: "",
//       instructorId: "",
//     },
//     onSubmit: handleAdd,
//   });

//   return (
//     <div className="tap min-h-screen montserrat-subrayada-bold pt-19">
//       <img src={image} className="w-[25px] mb-1" alt="" />
//       <h2 className="text-white border-b-[2px] w-[7%] ms-4 border-b-amber-50">COURSE</h2>
//       <h2 className="text-white text-xl ms-17 mt-6 mb-13">
//         <span className="text-white text-4xl">.</span> ADD NEW COURSE
//       </h2>

//       <Link to="/Home" className="text-black">
//         <button className="fixed left-2 top-[35%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
//           <i className="fa-solid fa-house mb-2"></i>
//           {"home".split("").map((letter, index) => (
//             <span key={index}>{letter}</span>
//           ))}
//         </button>
//       </Link>

//       <form onSubmit={formikAdd.handleSubmit} className="w-[85%] container mx-auto">
//         <div className="grid gap-2 mb-6 md:grid-cols-2">
//           <div className="flex items-center space-x-3 mb-10 me-4">
//             <label
//               htmlFor="name"
//               className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
//             >
//               <i className="fa fa-pen text-white me-2"></i> NAME OF COURSE{" "}
//               <span className="ms-2 text-2xl">:</span>
//             </label>
//             <input
//               name="name"
//               value={formikAdd.values.name}
//               onChange={formikAdd.handleChange}
//               onBlur={formikAdd.handleBlur}
//               type="text"
//               id="name"
//               className="bg-gray-50 border me-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
//               placeholder="...................."
//               required
//             />
//           </div>

//           {/* Uncommented and adjusted ID field */}
//           <div className="flex items-center space-x-3 mb-10 ms-9">
//             <label
//               htmlFor="id"
//               className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
//             >
//               <i className="fa fa-pen text-white me-2"></i> ID{" "}
//               <span className="ms-2 text-2xl">:</span>
//             </label>
//             <input
//               name="id"
//               value={formikAdd.values.id}
//               onChange={formikAdd.handleChange}
//               onBlur={formikAdd.handleBlur}
//               type="number" // Changed to type="number" for better UX
//               id="id"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%]"
//               placeholder="...................."
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-3">
//             <label
//               htmlFor="dayOfCourse"
//               className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
//             >
//               <i className="fa fa-pen text-white me-2"></i> DAY OF COURSE{" "}
//               <span className="ms-2 text-2xl">:</span>
//             </label>
//             <input
//               name="dayOfCourse"
//               value={formikAdd.values.dayOfCourse}
//               onChange={formikAdd.handleChange}
//               onBlur={formikAdd.handleBlur}
//               type="number" // Changed to type="number"
//               id="dayOfCourse"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
//               placeholder="..................."
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-3 mt-4 ms-4">
//             <label
//               htmlFor="startFrom"
//               className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
//             >
//               <i className="fa fa-pen text-white me-2"></i> START FROM{" "}
//               <span className="ms-2 text-2xl">:</span>
//             </label>
//             <input
//               name="startFrom"
//               value={formikAdd.values.startFrom}
//               onChange={formikAdd.handleChange}
//               onBlur={formikAdd.handleBlur}
//               type="text"
//               id="startFrom"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50%]"
//               placeholder="...................."
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-3 mt-10">
//             <label
//               htmlFor="instructorId"
//               className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
//             >
//               <i className="fa fa-pen text-white me-2"></i> INSTRUCTOR ID{" "}
//               <span className="ms-2 text-2xl">:</span>
//             </label>
//             <input
//               name="instructorId"
//               value={formikAdd.values.instructorId}
//               onChange={formikAdd.handleChange}
//               onBlur={formikAdd.handleBlur}
//               type="number" // Changed to type="number"
//               id="instructorId"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[35%]"
//               placeholder="...................."
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-3 mt-13 ms-4">
//             <label
//               htmlFor="endIn"
//               className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
//             >
//               <i className="fa fa-pen text-white me-2"></i> END IN{" "}
//               <span className="ms-2 text-2xl">:</span>
//             </label>
//             <input
//               name="endIn"
//               value={formikAdd.values.endIn}
//               onChange={formikAdd.handleChange}
//               onBlur={formikAdd.handleBlur}
//               type="text"
//               id="endIn"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
//               placeholder=".................."
//               required
//             />
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-18">
//           <button
//             type="submit"
//             className="bg-green-900 text-white rounded-md px-9 py-2"
//           >
//             {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "ADD COURSE"}
//           </button>
//           <Link
//             className="bg-green-800 rounded-[8px] px-8 py-2 text-sm ms-10 text-white"
//             to="/showcourse"
//           >
//             SHOW COURSES
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }بي الاسبنر اللي بيزود وينقص
















import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/image1.jpg';

export default function Course() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleAdd(values, { resetForm }) { // أضفنا resetForm من formik actions
    setIsLoading(true);

    const payload = {
      ...values,
      id: parseInt(values.id, 10),
      dayOfCourse: parseInt(values.dayOfCourse, 10),
      instructorId: parseInt(values.instructorId, 10),
    };

    try {
      let res = await axios.post("https://bigbrotherv01.runasp.net/api/Course/add", payload);
      console.log("Course Added:", res.data);

      // نفضي الـ form بعد النجاح
      resetForm(); // بيرجع الـ form للـ initialValues
    } catch (error) {
      console.error("Error adding course:", error);
    }

    setIsLoading(false);
  }

  const formikAdd = useFormik({
    initialValues: {
      name: "",
      id: 0,
      startFrom: "",
      endIn: "",
      dayOfCourse: "",
      instructorId: "",
    },
    onSubmit: handleAdd,
  });

  return (
    <div className="tap min-h-screen montserrat-subrayada-bold pt-19">
      <style>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>

      <img src={image} className="w-[25px] mb-1" alt="" />
      <h2 className="text-white border-b-[2px] w-[7%] ms-4 border-b-amber-50">COURSE</h2>
      <h2 className="text-white text-xl ms-17 mt-6 mb-13">
        <span className="text-white text-4xl">.</span> ADD NEW COURSE
      </h2>

      <Link to="/Home" className="text-black">
        <button className="fixed left-2 top-[35%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
          <i className="fa-solid fa-house mb-2"></i>
          {"home".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </button>
      </Link>

      <form onSubmit={formikAdd.handleSubmit} className="w-[85%] container mx-auto  ">
        <div className="grid gap-2 mb-6 md:grid-cols-2">
          <div className="flex items-center space-x-3 mb-10 me-4">
            <label
              htmlFor="name"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> NAME OF COURSE{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="name"
              value={formikAdd.values.name}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="text"
              id="name"
              className="bg-gray-50 border me-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
              placeholder="...................."
              required
            />
          </div>

          <div className="flex items-center space-x-3 mb-10 ms-9">
            <label
              htmlFor="id"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> ID{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="id"
              value={formikAdd.values.id}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="number"
              id="id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%]"
              placeholder="...................."
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <label
              htmlFor="dayOfCourse"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> DAY OF COURSE{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="dayOfCourse"
              value={formikAdd.values.dayOfCourse}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="number"
              id="dayOfCourse"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
              placeholder="..................."
              required
            />
          </div>

          <div className="flex items-center space-x-3 mt-4 ms-4">
            <label
              htmlFor="startFrom"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> START FROM{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="startFrom"
              value={formikAdd.values.startFrom}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="text"
              id="startFrom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50%]"
              placeholder="...................."
              required
            />
          </div>

          <div className="flex items-center space-x-3 mt-10">
            <label
              htmlFor="instructorId"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> INSTRUCTOR ID{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="instructorId"
              value={formikAdd.values.instructorId}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="number"
              id="instructorId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[35%]"
              placeholder="...................."
              required
            />
          </div>

          <div className="flex items-center space-x-3 mt-13 ms-4">
            <label
              htmlFor="endIn"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> END IN{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="endIn"
              value={formikAdd.values.endIn}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="text"
              id="endIn"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
              placeholder=".................."
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-18">
          <button
            type="submit"
            className="bg-green-900 text-white rounded-md px-9 py-2"
          >
            {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "ADD COURSE"}
          </button>
          <Link
            className="bg-green-800 rounded-[8px] px-8 py-2 text-sm ms-10 text-white"
            to="/showcourse"
          >
            SHOW COURSES
          </Link>
        </div>
      </form>
    </div>
  );
}