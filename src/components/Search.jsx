import React, { useState } from "react";

export const Search = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 0) return;
    onNewCategory(inputValue.trim());

    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="w-[300px] border h-8 rounded-md p-2 hover:border-neutral-500 hover:transition-colors duration-500 cursor-pointer"
        type="text"
        placeholder="Search movies"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
