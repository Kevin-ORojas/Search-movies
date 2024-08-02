import React from "react";
import { Search } from "./Search";
import { Login } from "./Login";
import { Register } from "./Register";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 px-10 bg-slate-400">
      <div className="flex items-center">
        <p>s</p>
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
