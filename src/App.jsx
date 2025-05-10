import React from 'react'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Students from './component/Students/Students'
import Course from './component/Course/Course'
import Asisstants from './component/Asisstants/Asisstants'

import Attandance from './component/Attandance/Attandance'
import Addone from './component/Addone/Addone'
import NotFound from './component/NotFound/NotFound'
import ShowCourse from './component/ShowCourse/ShowCourse'
import Home from './component/Home/Home'
// import Register from './component/Register/Register'
 import Login from './component/Login/Login'
import ConttextProvider from './ContextProvider/ContextProvider'
import Upload from './component/Upload/Upload'
import AddAssistant from './component/AddAssistant/AddAssistant'





export default function App() {
  let router=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
     {path:"",element:<Login/>},
    {path:"/Students",element:<Students/>},
    {path:"/Course",element:<Course/>},
    {path:"/Asisstants",element:<Asisstants/>},
    {path:"/Addone",element:<Addone/>},
    {path:"/showcourse",element:<ShowCourse/>},
    {path:"/Home",element:<Home/>},
    // {path:"/Register",element:<Register/>},
    {path:"/Attandance",element:<Attandance/>},
    {path:"/Upload",element:<Upload/>},
    {path:"/AddAssistant",element:<AddAssistant/>},
    {path:"*",element:<NotFound/>}
   ]}
  ])
  return (
    <>
  
  
<ConttextProvider>
<RouterProvider router={router}/>
</ConttextProvider>
  
  
    </>
  )
}

