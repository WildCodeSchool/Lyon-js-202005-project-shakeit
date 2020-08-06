import React from "react";
import EmptierButton from "../components/ShoppingList/EmptierButton";
import ShoppingListIngredient from "./ShoppingListIngredient";
import Title from "./../components/MainPage/Title";
const ShoppingListContent = (props) => {
  let listIngredients = [];
  if (props.list.length !== 0 && props.list !== null) {
    listIngredients = props.list.map((ingredient) => {
      return (
        <ShoppingListIngredient
          ingredient={ingredient.name}
          key={ingredient.id}
        />
      );
    });
  }

  return (
    <div>

     <Title>Ma shopping-list</Title>

      {listIngredients}
      <div>
        <EmptierButton>Reset</EmptierButton>
      </div>
    </div>
  );
};

export default ShoppingListContent;
