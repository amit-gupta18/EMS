import React, { Children, createContext, useState } from "react";
import { setLocalStorage } from "../utils/localStorage";
import { getLocalStorage } from "../utils/localStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  setLocalStorage();

  useEffect(() => {
    const {employees} = getLocalStorage();
    setUserData({employees});
  }, []);

  //   console.log("local storage : ", getLocalStorage());
  //   console.log("userData : ", userData);

  return (
    <div>
      <AuthContext.Provider value={[userData , setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
 