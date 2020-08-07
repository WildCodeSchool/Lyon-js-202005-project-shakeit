import React, { useState } from "react";
import EmptierButton from "../components/ShoppingList/EmptierButton";
import ShoppingListIngredient from "./ShoppingListIngredient";
import ShoppingListContainer from "./../components/ShoppingList/ShoppingListContainer";
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
      <ShoppingListContainer>{listIngredients}</ShoppingListContainer>
      <div>
        <EmptierButton
          onClick={() => {
            props.removeListIngredients([]);
          }}
        >
          Reset
        </EmptierButton>
      </div>
    </div>
  );
};

export default ShoppingListContent;
