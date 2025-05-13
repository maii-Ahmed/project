//دي الصح
// import React, {  createContext } from 'react'
// import { useState } from 'react'
//  export let AuthContext= createContext()
// export default function ConttextProvider({children}) {
//  let[token,setToken]=  useState(localStorage.getItem("token"))
//  let [asisstantId, setAsisstantId] = useState(localStorage.getItem("asisstantId"))
//  console.log("asisstantId",asisstantId);
//  console.log("token",token);
 
//   return <AuthContext.Provider value={{token,setToken,asisstantId, setAsisstantId}}>

// {children}
//   </AuthContext.Provider>
// }

















import React, { createContext, useState } from 'react';

export let AuthContext = createContext();

export default function ContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [asisstantId, setAsisstantId] = useState(localStorage.getItem("asisstantId") || null);
 
  console.log("asisstantId", asisstantId);
  console.log("token", token);
  

  // Update token and store it in localStorage
  const updateToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  // Update asisstantId and store it in localStorage
  const updateAsisstantId = (newAsisstantId) => {
    setAsisstantId(newAsisstantId);
    if (newAsisstantId) {
      localStorage.setItem("asisstantId", newAsisstantId);
    } else {
      localStorage.removeItem("asisstantId");
    }
  };

  

  return (
    <AuthContext.Provider value={{ token, setToken: updateToken, asisstantId, setAsisstantId: updateAsisstantId }}>
      {children}
    </AuthContext.Provider>
  );
}


// import React, { createContext, useEffect, useState } from 'react';

// export let AuthContext = createContext();

// export default function ContextProvider({ children }) {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [asisstantId, setAsisstantId] = useState(localStorage.getItem("asisstantId") || null);
//   useEffect(() => {
//     console.log("✅ Updated asisstantId:", asisstantId);
//   }, [asisstantId]);
//   console.log("asisstantId",asisstantId);
//     console.log("token",token);
//   // Update token and store it in localStorage
//   const updateToken = (newToken) => {
//     setToken(newToken);
//     if (newToken) {
//       localStorage.setItem("token", newToken);
//     } else {
//       localStorage.removeItem("token");
//     }
//   };

//   // Update asisstantId and store it in localStorage
//   const updateAsisstantId = (newAsisstantId) => {
//     setAsisstantId(newAsisstantId);
//     if (newAsisstantId) {
//       localStorage.setItem("asisstantId", newAsisstantId);
//     } else {
//       localStorage.removeItem("asisstantId");
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ token, setToken: updateToken, asisstantId, setAsisstantId: updateAsisstantId }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }