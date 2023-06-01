import React, { useState } from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);
  const appClass = isOn ? "in-cart" : "";

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isOn ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
