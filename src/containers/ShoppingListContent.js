import React from "react";
import EmptierButton from "../components/ShoppingList/EmptierButton";
import ShoppingListIngredient from "./ShoppingListIngredient";

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
      <h1>Your shopping-list</h1>
      {listIngredients}
      <div>
        <EmptierButton>Reset</EmptierButton>
      </div>
    </div>
  );
};

export default ShoppingListContent;
