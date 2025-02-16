import React from 'react'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Students from './component/Students/Students'
import Course from './component/Course/Course'
import Asisstants from './component/Asisstants/Asisstants'

import Attandance from './component/Attandance/Attandance'




export default function App() {
  let router=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {path:" ",element:<Attandance/>},
    {path:"/Students",element:<Students/>},
    {path:"/Course",element:<Course/>},
    {path:"/Asisstants",element:<Asisstants/>},
   ]}
  ])
  return (
    <>
  
  <RouterProvider router={router}/>

  
  
    </>
  )
}

