import React, { useState } from "react";
import ButtonStyle from "../components/ShoppingList/ButtonStyle";
import ShoppingListIngredient from "./ShoppingListIngredient";
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

  const sortIngredients = (num1, num2) => {
    let listIngrSorted = list.sort(function (a, b) {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return textA < textB ? num1 : textA > textB ? num2 : 0;
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

  let displayButtonsClearSort = (
    <>
      <ButtonStyle
        onClick={() => {
          setListIngredients([]);
        }}
      >
        Clear All
      </ButtonStyle>
      <ButtonStyle
        onClick={
          displaySortedIngr
            ? () => sortIngredients(1, -1)
            : () => sortIngredients(-1, 1)
        }
      >
        {displaySortedIngr ? "Sort Z - A" : "Sort A - Z"}
      </ButtonStyle>
    </>
  );

  let emptyList = (
    <>
      <p
        style={{
          fontStyle: "italic",
          color: "lightgrey",
          padding: "20px 0 0 20px",
        }}
      >
        Your shopping list is empty...
      </p>
    </>
  );

  return (
    <div>
      <Title style={{ color: "rgba(0, 185, 205, 1)" }}>Shopping list</Title>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {list.length === 0 ? emptyList : displayButtonsClearSort}
      </div>
      <div className={list.length === 0 ? "" : "paperStack"}>
        {listIngredients}
      </div>

    </div>
  );
};

export default ShoppingListContent;