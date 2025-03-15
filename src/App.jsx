import React from 'react'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Students from './component/Students/Students'
import Course from './component/Course/Course'
import Asisstants from './component/Asisstants/Asisstants'

import Attandance from './component/Attandance/Attandance'
import Addone from './component/Addone/Addone'
import NotFound from './component/NotFound/NotFound'





export default function App() {
  let router=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {path:"",element:<Attandance/>},
    {path:"/Students",element:<Students/>},
    {path:"/Course",element:<Course/>},
    {path:"/Asisstants",element:<Asisstants/>},
    {path:"/Addone",element:<Addone/>},
    {path:"*",element:<NotFound/>}
   ]}
  ])
  return (
    <>
  
  <RouterProvider router={router}/>

  
  
    </>
  )
}

