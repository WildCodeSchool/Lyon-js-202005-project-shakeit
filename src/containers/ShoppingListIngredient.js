import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingListIngredient = ({ ingredient, ingredientId, removeIng }) => {
  const styledDiv = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  };

  const styledIngName = {
    color: "black",
    alignSelf: "center",
    marginLeft: "15px",
  };

  return (
    <div style={styledDiv}>
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
    </div>
  );
};

export default ShoppingListIngredient;
