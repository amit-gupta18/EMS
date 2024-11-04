import React, { useContext, useEffect, useState } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import "./App.css";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  // const authData = useContext(AuthContext);
  const [userData,SetUserData] = useContext(AuthContext)


  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find((e) => e.email == email && e.password == password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" , data:employee })
        );
      }
    } else {
      alert("Invalid Credentials ");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : " "}
      {user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
      {/* <Login /> */}
      {/* <EmployeeDashboard />  */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
