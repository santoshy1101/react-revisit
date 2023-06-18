import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider=({children})=>{
const [isAuth,setIsAuth] = useState(false);
const [user,setUser] = useState([]);

const handleLogin=(data)=>{
  setIsAuth(true);
  setUser(data)
}

const handleLogout=()=>{
  setIsAuth(false);
  setUser("")
}

  return(
    <AuthContext.Provider value={{isAuth,user,handleLogin,handleLogout}}>
    {children}
    </AuthContext.Provider>
  )
}