import React from "react";
import CocktailIngredient from "./../components/RecipePage/CocktailIngredient";
import IngredientBtn from "./../components/RecipePage/IngredientBtn";
import ListIngredient from "./../components/RecipePage/ListIngredient";

const Ingredients = ({ item, addIngredient }) => {
  return (
    <ListIngredient>
      <CocktailIngredient>
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${item.name}-Small.png`}
          alt={item.name}
        />
        <span style={{color:'#3DE0D7'}}>
          {item.measure ? `${item.measure} of` : null} {item.name}
        </span>
      </CocktailIngredient>
      <IngredientBtn
        onClick={() => {
          addIngredient(item);
        }}
      >
        Add
      </IngredientBtn>
    </ListIngredient>
  );
};

export default Ingredients;
