import React from "react";

const ShoppingListIngredient = ({ ingredient, ingredientId, removeIng }) => {
  return (
    <>
      <div>{ingredient}</div>
      <button onClick={() => removeIng(ingredientId)}>Remove</button>
    </>
  );
};

export default ShoppingListIngredient;
