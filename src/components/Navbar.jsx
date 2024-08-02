import React from "react";
import { Search } from "./Search";
import { Login } from "./Login";
import { Register } from "./Register";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 px-10 bg-slate-400">
      <div className="flex items-center gap-2">
        <p className=" flex items-center justify-center bg-redBtn transition-colors duration-300 ease-in-out hover:bg-red-200 rounded-full p-3 w-11 h-11 ">
          S
        </p>
        <h2>Movie</h2>
        <Search />
      </div>

      <div className="flex">
        <Login />
        <Register />
      </div>
    </div>
  );
};
