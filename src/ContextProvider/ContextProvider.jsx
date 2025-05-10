import React, {  createContext } from 'react'
import { useState } from 'react'
 export let AuthContext= createContext()
export default function ConttextProvider({children}) {
 let[token,setToken]=  useState(localStorage.getItem("token"))
  return <AuthContext.Provider value={{token,setToken}}>

{children}
  </AuthContext.Provider>
}