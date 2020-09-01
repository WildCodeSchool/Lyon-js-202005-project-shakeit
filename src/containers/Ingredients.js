import React from "react";
import CocktailIngredient from "./../components/RecipePage/CocktailIngredient";
import ListIngredient from "./../components/RecipePage/ListIngredient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ingredients = ({ item, addIngredient }) => {
  return (
    <ListIngredient>
      <CocktailIngredient>
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${item.name}-Small.png`}
          alt={item.name}
        />
        <span style={{ color: "#3DE0D7", paddingLeft: "15px" }}>
          {item.measure ? `${item.measure}` : null} {item.name}
        </span>
      </CocktailIngredient>

      <FontAwesomeIcon
        icon="cart-plus"
        style={{
          backgroundColor: "rgba(256,256,256,0)",
          width: "32px",
          height: "auto",
          marginRight: "15px",
        }}
        color="#00b9cd"
        onClick={() => {
          addIngredient(item);
        }}
      />
    </ListIngredient>
  );
};

export default Ingredients;
