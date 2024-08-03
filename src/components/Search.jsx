import React from "react";

export const Search = () => {
  return (
    <form>
      <input
        className="w-[300px] border h-8 rounded-md p-2 hover:border-neutral-500 hover:transition-colors duration-500 cursor-pointer"
        type="text"
        placeholder="Search movies"
      />
    </form>
  );
};
