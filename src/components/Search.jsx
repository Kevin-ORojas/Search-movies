import React from "react";

export const Search = () => {
  return (
    <>
      <input type="text" placeholder="Search movies" />
      <button className="bg-redBtn transition-colors duration-300 ease-in-out hover:bg-red-200 w-14 h-8 rounded-md flex items-center justify-center ">
        Seach
      </button>
    </>
  );
};
