import React, {  createContext } from 'react'
import { useState } from 'react'
 export let AuthContext= createContext()
export default function ConttextProvider({children}) {
 let[token,setToken]=  useState(localStorage.getItem("token"))
 let [asisstantId, setAsisstantId] = useState(localStorage.getItem("asisstantId") || null)
  return <AuthContext.Provider value={{token,setToken,asisstantId, setAsisstantId}}>

{children}
  </AuthContext.Provider>
}