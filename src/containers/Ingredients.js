import React from "react";

const Ingredients = ({ item }) => {
  return (
    <li>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${item.name}-Small.png`}
        alt={item.name}
      />
      {item.measure} of {item.name}
      <button>Add</button>
    </li>
  );
};

export default Ingredients;
