import React, {  useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const uniqueList= Menu.map((curElem)=>{
  return curElem.category
})
console.log(uniqueList);

const Restrurent = () => {
  const [menuData, setMenuData] = useState(Menu);
  

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restrurent;
