import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    // console.log("email : ", email);
    // console.log("password : ", password);
    setEmail("");
    setPassword("");
    handleLogin(email , password);
  };

  return (
    <div className="flex h-screen w-screen items-center gap-10 justify-center">
      <div className="flex-column border-2 p-2 rounded-lg ">
        <h1 className="bg-slate-700 rounded-lg font-bold text-xl text-red-700">Credentials</h1>
        <h2 className="font-bold text-xl mt-6 text-yellow-400">For admin <br /> email : admin@me.com <br /> password: 123 </h2>
        <h2 className="font-bold text-xl mt-4 text-green-700">For employees <br />there are total of 5 employees and the email is 1,2,3,4,5  <br />example: <br /> for employee 1 : <br />email : employee1@example.com <br /> password: 123</h2>
        <h2>link to project : </h2> {/*add the repo link here .*/ }
      </div>
      <div className="border-2 rounded-xl  border-emerald-500 p-20 ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
            value={email}
            required
            className=" outline-none border-2 border-emerald-600 font-medium text-lg  bg-transparent py-2 px-6 rounded-full  placeholder:text-gray-400 placeholder:px-4 "
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            value = {password}
            className="outline-none border-2 border-emerald-600 font-medium text-lg  bg-transparent py-2 px-6 rounded-full mt-8  placeholder:text-gray-400 placeholder:px-4  "
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-none w-60 font-bold bg-emerald-600 background-color text-white outline-none py-3 px-2 mt-20 text-xl rounded-full">
            Log-in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
