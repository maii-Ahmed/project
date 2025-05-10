import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import image from "../../assets/image1.jpg";

export default function AddAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  async function handleAdd(values) {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const payload = {
      password: values.password,
      name: values.name,
      courseId: values.courseId, // بنبقى نبعته كـ string عشان يتطابق مع الـ API
      phoneNumber: values.phoneNumber,
    };

    console.log("Payload being sent:", payload);

    try {
      let res = await axios.post("https://bigbrotherv01.runasp.net/api/Asisstant/add", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response from API:", res.data);
      // التأكد من الـ response body
      navigate("/Asisstants");
      
    } catch (error) {
      console.error("Error adding Assistant:", error);
     
    } finally {
      setIsLoading(false);
    }
  }

  // Validation schema باستخدام yup
  let validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "الاسم لازم يكون على الأقل 3 حروف")
      .max(50, "الاسم لازم يكون أقل من 50 حرف")
      .required("الاسم مطلوب"),
    courseId: yup
      .string()
      .required("رقم الكورس مطلوب"),
    phoneNumber: yup
      .string()
      .matches(
        /^(?:\+20|0)1[0125]\d{8}$/,
        "رقم التليفون لازم يكون رقم مصري صحيح (مثال: 01012345678 أو +201012345678)"
      )
      .required("رقم التليفون مطلوب"),
    password: yup
      .string()
      .min(6, "الباسوورد لازم يكون على الأقل 6 حروف")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "الباسوورد لازم يحتوي على حرف و رقم و رمز خاص (مثال: 1234@Mm)"
      )
      .required("الباسوورد مطلوب"),
  });

  const formikAdd = useFormik({
    initialValues: {
      name: "",
      courseId: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleAdd,
  });

  return (
    <div className="tap min-h-screen montserrat-subrayada-bold pt-19">
      <img src={image} className="w-[25px] mb-1" alt="" />
      <h2 className="text-white border-b-[2px] w-[7%] ms-4 border-b-amber-50">ASSISTANT</h2>
      <h2 className="text-white text-xl ms-17 mt-6 mb-13">
        <span className="text-white text-4xl">.</span> ADD NEW ASSISTANT
      </h2>

      <Link to="/Home" className="text-black">
        <button className="fixed left-2 top-[35%] transform -translate-y-1/2 bg-white px-3.5 py-4 rounded-lg shadow-lg hover:bg-white transition flex flex-col items-center text-base font-bold leading-tight">
          <i className="fa-solid fa-house mb-2"></i>
          {"home".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </button>
      </Link>

      {successMessage && (
        <div className="max-w-md mx-auto mb-4 p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 text-center">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="max-w-md mx-auto mb-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center">
          {errorMessage}
        </div>
      )}

      <form onSubmit={formikAdd.handleSubmit} className="w-[85%] container mx-auto">
        <div className="grid gap-2 mb-6 md:grid-cols-2">
          <div className="flex items-center space-x-3 mb-10 me-4">
            <label
              htmlFor="name"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> NAME OF ASSISTANT{" "}
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
          {formikAdd.errors.name && formikAdd.touched.name && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {formikAdd.errors.name}
            </div>
          )}

          <div className="flex items-center space-x-3 mb-10 ms-9">
            <label
              htmlFor="courseId"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> courseId{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="courseId"
              value={formikAdd.values.courseId}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="text"
              id="courseId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[45%]"
              placeholder="...................."
              required
            />
          </div>
          {formikAdd.errors.courseId && formikAdd.touched.courseId && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {formikAdd.errors.courseId}
            </div>
          )}

          <div className="flex items-center space-x-3">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> phoneNumber{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="phoneNumber"
              value={formikAdd.values.phoneNumber}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="text"
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[55%]"
              placeholder="...................."
              required
            />
          </div>
          {formikAdd.errors.phoneNumber && formikAdd.touched.phoneNumber && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {formikAdd.errors.phoneNumber}
            </div>
          )}

          <div className="flex items-center space-x-3 mt-4 ms-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-yellow-300 dark:text-white whitespace-nowrap"
            >
              <i className="fa fa-pen text-white me-2"></i> password{" "}
              <span className="ms-2 text-2xl">:</span>
            </label>
            <input
              name="password"
              value={formikAdd.values.password}
              onChange={formikAdd.handleChange}
              onBlur={formikAdd.handleBlur}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50%]"
              placeholder="...................."
              required
            />
          </div>
          {formikAdd.errors.password && formikAdd.touched.password && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {formikAdd.errors.password}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center mt-18">
          <button
            type="submit"
            className="bg-green-900 text-white rounded-md px-9 py-2"
            disabled={isLoading}
          >
            {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "ADD Assistant"}
          </button>
        </div>
      </form>
    </div>
  );
}