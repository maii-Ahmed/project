// import React, { createContext, useEffect, useState } from 'react'
// export let Context=createContext()
// export default function ProviderContext({children}) {
//     const[token,setToken]=useState(null)
//     useEffect(() => {
//         if(localStorage.getItem("token"))
//            {
//               setToken(localStorage.getItem("token"))
//            }
//      }, [])
//   return (
//    <>
//    <Context.Provider value={{token,setToken}}>
//     {children}
//    </Context.Provider>
//    </>
//   )
// }
