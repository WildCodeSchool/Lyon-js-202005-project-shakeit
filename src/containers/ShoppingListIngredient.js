import React from "react";
import ShoppListIngrContainer from "./../components/ShoppingList/ShoppListIngrContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingListIngredient = ({ ingredient, ingredientId, removeIng }) => {
  const styledIngName = {
    color: "black",
    alignSelf: "center",
    marginLeft: "15px",
  };

  return (
    <ShoppListIngrContainer>
      <div style={styledIngName}>{ingredient}</div>

      <FontAwesomeIcon
        icon="times"
        style={{
          backgroundColor: "rgba(256,256,256,0)",
          width: "18px",
          height: "auto",
          marginRight: "15px",
          cursor: "pointer",
        }}
        color="#00b9cd"
        onClick={() => removeIng(ingredientId)}
      />
    </ShoppListIngrContainer>
  );
};

export default ShoppingListIngredient;
