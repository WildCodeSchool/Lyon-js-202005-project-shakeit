import React from "react";
import IngredientBtn from "./../components/RecipePage/IngredientBtn";

const ShoppingListIngredient = ({ ingredient, ingredientId, removeIng }) => {
  const styledDiv = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  };

  const styledIngName = {
    color: "rgb(61, 224, 215)",
    alignSelf: "center",
    marginLeft: "15px",
  };

  return (
    <div style={styledDiv}>
      <div style={styledIngName}>{ingredient}</div>
      <IngredientBtn onClick={() => removeIng(ingredientId)}>X</IngredientBtn>
    </div>
  );
};

export default ShoppingListIngredient;
