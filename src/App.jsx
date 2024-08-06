import { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  const [categories, setCategories] = useState(["Dead pool"]);
  const onAddNewCategory = (newCategory) => {
    // if (
    //   categories.find(
    //     (category) => category.toLowerCase() === newCategory.toLowerCase()
    //   )
    // )
    setCategories([newCategory]);
    return;
  };
  return (
    <div className=" min-h-screen">
      <Navbar onAddNewCategory={onAddNewCategory} />
      <Home categories={categories} />
    </div>
  );
}

export default App;
