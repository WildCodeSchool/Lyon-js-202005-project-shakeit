import React from "react";


const Ingredients = ({ item, addIngredient }) => {

  return (
    <li>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${item.name}-Small.png`}
        alt={item.name}
      />
      {item.measure} of {item.name}
      <button
        onClick={() => {
          addIngredient(item);
        }}
      >
        Add
      </button>
    </li>
  );
};

export default Ingredients;
