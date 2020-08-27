import React, { useState, useEffect } from "react";
import EmptierButton from "../components/ShoppingList/EmptierButton";
import ShoppingListIngredient from "./ShoppingListIngredient";
import ShoppingListContainer from "./../components/ShoppingList/ShoppingListContainer";
import Title from "./../components/MainPage/Title";

const ShoppingListContent = ({ list, setListIngredients }) => {
  const [displaySortedIngr, setDisplaySortedIngr] = useState(false);

  const removeIng = (id) => {
    const newListIngredients = [...list];
    const index = newListIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newListIngredients.splice(index, 1);
    setListIngredients(newListIngredients);
  };

  const sortIngredients = () => {
    let listIngrSorted = list.sort(function (a, b) {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setListIngredients(listIngrSorted);
    setDisplaySortedIngr((prevState) => !prevState);
  };

  let listIngredients = [];
  if (list.length !== 0 && list !== null) {
    listIngredients = list.map((ingredient, i) => {
      return (
        <ShoppingListIngredient
          ingredient={ingredient.name}
          key={i}
          ingredientId={ingredient.id}
          removeIng={removeIng}
        />
      );
    });
  }

  return (
    <div>
      <Title>Your Shopping list</Title>
      <ShoppingListContainer>{listIngredients}</ShoppingListContainer>
      <div>
        <EmptierButton
          onClick={() => {
            setListIngredients([]);
          }}
        >
          Reset
        </EmptierButton>
        <button onClick={() => sortIngredients()}>Sort Ingredients</button>
      </div>
    </div>
  );
};

export default ShoppingListContent;
