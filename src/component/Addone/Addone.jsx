import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import image from "../../assets/image1.jpg";

export default function Addone() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [courseId, setCourseId] = useState(""); // ✅ Fix: Course ID should be a separate state
  const navigate = useNavigate();


  async function handleAdd(values) {
    setIsLoading(true);
    setErrorMessage("");

    try {
      let res = await axios.post(
        `https://bigbrotherv01.runasp.net/api/Student/add?courseid=${values.courseid}`,
        {
          id: 0, // Always set to 0
          name: values.name,
          department: values.department,
          code: values.code,
        }
      );

      console.log("Student Added:", res.data);
      navigate("/Students"); // ✅ Redirect after adding student
    } catch (error) {
      console.error("Error adding student:", error);
      setErrorMessage("Failed to add student. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  // ✅ Add Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    department: Yup.string().required("Department is required"),
    code: Yup.number()
    .typeError("Code must be a number") // ✅ Ensure it's a number
    .required("Code is required"),
    courseid: Yup.string().required("Course ID is required"), // ✅ Make sure courseId is required
  });

  const formikAdd = useFormik({
    initialValues: {
      name: "",
      department: "",
      code: "",
      courseid: "",
    },
    validationSchema, // Apply validation
    onSubmit: async (values, { setSubmitting }) => {
      setCourseId(values.courseid); // ✅ Fix: Set courseId from form input
      const formattedValues = {
        ...values,
        code: Number(values.code), // Ensure `code` is sent as a number
      };
      setCourseId(values.courseid); // ✅ Store courseId in state

      await handleAdd(formattedValues);
      setSubmitting(false);
    },
  });

  return (
    <div className="tap min-h-screen montserrat-subrayada-bold pt-19">
      <img src={image} className="w-[25px] mb-1" alt="Student Management" />
      <h2 className="text-white border-b-[2px] w-[7%] ms-4 border-b-amber-50">
        STUDENTS
      </h2>
      <h2 className="text-white text-xl ms-17 mt-6 mb-12">
        <span className="text-white text-4xl"> . </span> ADD ONE
      </h2>

      {/* Error Message */}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <form
        onSubmit={formikAdd.handleSubmit}
        className="w-[85%] container mx-auto"
      >
        <Link to="/Home" className="text-black">
          <button className="fixed left-2 top-[35%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
            <i className="fa-solid fa-house mb-2"></i>
            {"home".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </button>
        </Link>

        <div className="grid gap-2 mb-6 md:grid-cols-2">
          {/* Student Name */}
          <div className="flex items-center space-x-3 mb-10">
            <label htmlFor="name" className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
              <i className="fa fa-pen text-white me-2"></i> studentName <span className="ms-2 text-2xl">:</span>
            </label>
            <div className="w-[70%]">
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
              {formikAdd.errors.name && <div className="text-red-500">{formikAdd.errors.name}</div>}
            </div>
          </div>

          {/* Department */}
          <div className="flex items-center space-x-3 mt-4 ms-4">
            <label htmlFor="department" className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
              <i className="fa fa-pen text-white me-2"></i> DEPARTMENT <span className="ms-2 text-2xl">:</span>
            </label>
            <div className="w-[50%]">
              <input
                name="department"
                value={formikAdd.values.department}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                type="text"
                id="department"
                className="bg-gray-50 border me-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
                placeholder="...................."
                required
              />
              {formikAdd.errors.department && <div className="text-red-500">{formikAdd.errors.department}</div>}
            </div>
          </div>

          {/* Code */}
          <div className="flex items-center space-x-3 mt-10">
            <label htmlFor="code" className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
              <i className="fa fa-pen text-white me-2"></i> code <span className="ms-2 text-2xl">:</span>
            </label>
            <div className="w-[35%]">
              <input
                name="code"
                value={formikAdd.values.code}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                type="text"
                id="code"
                className="bg-gray-50 border me-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
                placeholder="...................."
                required
              />
              {formikAdd.errors.code && <div className="text-red-500">{formikAdd.errors.code}</div>}
            </div>
          </div>

          {/* Course ID */}
          <div className="flex items-center space-x-3 mt-10 ms-4">
            <label htmlFor="courseid" className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap">
              <i className="fa fa-pen text-white me-2"></i> CourseID <span className="ms-2 text-2xl">:</span>
            </label>
            <div className="w-[50%]">
              <input
                name="courseid"
                value={formikAdd.values.courseid}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                type="text"
                id="courseid"
                className="bg-gray-50 border me-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
                placeholder="...................."
                required
              />
              {formikAdd.errors.courseid && <div className="text-red-500">{formikAdd.errors.courseid}</div>}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-18">
          <button type="submit" className="bg-green-900 text-white rounded-md px-9 py-2 w-[180px]" disabled={isLoading}>
            {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "Add"}
            <i className="fa fa-pen ms-13"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
