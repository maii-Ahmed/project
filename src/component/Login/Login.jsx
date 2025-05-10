import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { AuthContext } from '../../ContextProvider/ContextProvider';

export default function Login() {
  let { setToken } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handelLogin(values) {
    setIsLoading(true);
    setErrorMessage(null); // Reset error message before new request
    console.log("values", values);

    axios
      .post("https://bigbrotherv01.runasp.net/api/Accounts/login", values)
      .then((res) => {
        console.log(res);
        navigate("/Home");
        localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        setToken(res.data.token);
      })
      .catch((error) => {
        console.log(error);
        // عرض رسالة الخطأ من الـ API
        let errorMsg = "حدث خطأ أثناء التسجيل. حاولي مرة أخرى.";
        if (error.response?.data) {
          if (typeof error.response.data === 'string') {
            errorMsg = error.response.data;
          } else if (error.response.data.message) {
            errorMsg = error.response.data.message;
          } else if (error.response.data.errors) {
            // لو في أخطاء متعددة، نعرضها كلها
            const errors = error.response.data.errors;
            errorMsg = Object.entries(errors)
              .map(([key, value]) => `${key}: ${value.join(", ")}`)
              .join("; ");
          }
        }
        setErrorMessage(errorMsg);
        setIsLoading(false);
      });
  }

  let validationSchema = yup.object().shape({
  
    email: yup.string().email("البريد الإلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "كلمة المرور يجب أن تكون 8 أحرف على الأقل، وتحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص (مثل @ أو !)"
      )
      .required("كلمة المرور مطلوبة"),
   
  });

  const LoginFormik = useFormik({
    initialValues: {
     
      email: "",
      password: "",
      
    },
    validationSchema,
    onSubmit: handelLogin,
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
      <form onSubmit={LoginFormik.handleSubmit} className="w-1/2 container mx-auto mt-12">
        <h2 className="mb-2">Login Now:</h2>
       
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            name="email"
            value={LoginFormik.values.email}
            onChange={LoginFormik.handleChange}
            onBlur={LoginFormik.handleBlur}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@mail.com"
            required
          />
        </div>
        {LoginFormik.errors.email && LoginFormik.touched.email ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {LoginFormik.errors.email}
          </div>
        ) : null}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password
          </label>
          <input
            name="password"
            value={LoginFormik.values.password}
            onChange={LoginFormik.handleChange}
            onBlur={LoginFormik.handleBlur}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password
          </label>
          <input
            name="password"
            value={LoginFormik.values.password}
            onChange={LoginFormik.handleChange}
            onBlur={LoginFormik.handleBlur}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
        </div>
        {LoginFormik.errors.password && LoginFormik.touched.password ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {LoginFormik.errors.password}
          </div>
        ) : null}
       
        <button type="submit" className="bg-green-500 text-white rounded-md mt-4 p-2">
          {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "Login"}
        </button>
      </form>
    </div>
  );
}