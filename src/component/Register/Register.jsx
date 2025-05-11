import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { AuthContext } from '../../ContextProvider/ContextProvider';

export default function Register() {
  let { setToken } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handelRegister(values) {
    setIsLoading(true);
    setErrorMessage(null); // Reset error message before new request
    console.log("values", values);

    axios
      .post("https://bigbrotherv01.runasp.net/api/Accounts/register-doc", values)
      .then((res) => {
        console.log(res);
        // Save token to localStorage
        localStorage.setItem("token", res.data.token);
        // Save courses to localStorage (assuming the API returns them under res.data.courses)
        if (res.data.courses) {
          localStorage.setItem("courses", JSON.stringify(res.data.courses));
        } else {
          localStorage.setItem("courses", JSON.stringify([])); // If no courses, save an empty array
        }
        setToken(res.data.token);
        setIsLoading(false);
        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
        // عرض رسالة الخطأ من الـ API
        let errorMsg = "حدث خطأ أثناء التسجيل. حاولي مرة أخرى.";
        if (error.response?.status === 400) {
          // خطأ 400 معناه إن البيانات اللي بعتناها مش صحيحة
          if (error.response?.data) {
            if (typeof error.response.data === 'string') {
              errorMsg = error.response.data;
            } else if (error.response.data.message) {
              errorMsg = error.response.data.message;
            } else if (error.response.data.errors) {
              const errors = error.response.data.errors;
              errorMsg = Object.entries(errors)
                .map(([key, value]) => `${key}: ${value.join(", ")}`)
                .join("; ");
            }
          } else {
            errorMsg = "البيانات غير صحيحة. تأكدي من إدخال جميع الحقول بشكل صحيح.";
          }
        } else if (error.response?.status === 409) {
          // خطأ 409 معناه إن الإيميل أو رقم التليفون مكرر
          errorMsg = "الإيميل أو رقم التليفون مسجل بالفعل. استخدمي بيانات مختلفة.";
        }
        setErrorMessage(errorMsg);
        setIsLoading(false);
      });
  }

  let validationSchema = yup.object().shape({
    displayName: yup
      .string()
      .min(3, "الاسم يجب أن يكون 3 أحرف على الأقل")
      .max(20, "الاسم يجب ألا يزيد عن 20 حرفًا")
      .required("الاسم مطلوب"),
    email: yup.string().email("البريد الإلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
    password: yup
      .string()
      .matches(
        /^\d{8,}$/,
        "كلمة المرور يجب أن تكون 8 أرقام على الأقل"
      )
      .required("كلمة المرور مطلوبة"),
    phoneNumber: yup
      .string()
      .matches(
        /^(?:\+20|0)1[0125]\d{8}$/,
        "رقم الهاتف يجب أن يكون رقم مصري صحيح (مثال: 01012345678 أو +201012345678)"
      )
      .required("رقم الهاتف مطلوب"),
  });

  const RegisterFormik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: handelRegister,
  });

  return (
    <div className='tap min-h-screen'>
      {errorMessage ? (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : null}
      <form onSubmit={RegisterFormik.handleSubmit} className="w-1/2 container mx-auto">
        <h2 className="mb-2">Register Now:</h2>
        <div>
          <label
            htmlFor="displayName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Display Name
          </label>
          <input
            name="displayName"
            value={RegisterFormik.values.displayName}
            onChange={RegisterFormik.handleChange}
            onBlur={RegisterFormik.handleBlur}
            type="text"
            id="displayName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        {RegisterFormik.errors.displayName && RegisterFormik.touched.displayName ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {RegisterFormik.errors.displayName}
          </div>
        ) : null}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            name="email"
            value={RegisterFormik.values.email}
            onChange={RegisterFormik.handleChange}
            onBlur={RegisterFormik.handleBlur}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@mail.com"
            required
          />
        </div>
        {RegisterFormik.errors.email && RegisterFormik.touched.email ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {RegisterFormik.errors.email}
          </div>
        ) : null}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            name="password"
            value={RegisterFormik.values.password}
            onChange={RegisterFormik.handleChange}
            onBlur={RegisterFormik.handleBlur}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
        </div>
        {RegisterFormik.errors.password && RegisterFormik.touched.password ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {RegisterFormik.errors.password}
          </div>
        ) : null}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            name="phoneNumber"
            value={RegisterFormik.values.phoneNumber}
            onChange={RegisterFormik.handleChange}
            onBlur={RegisterFormik.handleBlur}
            type="tel"
            id="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number"
            required
          />
        </div>
        {RegisterFormik.errors.phoneNumber && RegisterFormik.touched.phoneNumber ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {RegisterFormik.errors.phoneNumber}
          </div>
        ) : null}

        <button type="submit" className="bg-green-500 text-white rounded-md mt-4 p-2">
          {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "register"}
        </button>
      </form>
    </div>
  );
}