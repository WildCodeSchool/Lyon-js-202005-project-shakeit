import React from "react";
import EmptierButton from "../components/ShoppingList/EmptierButton";
import ShoppingListIngredient from "./ShoppingListIngredient";
import ShoppingListContainer from "./../components/ShoppingList/ShoppingListContainer";
import Title from "./../components/MainPage/Title";

const ShoppingListContent = ({ list, setListIngredients }) => {
  const removeIng = (id) => {
    const newListIngredients = [...list];
    const index = newListIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newListIngredients.splice(index, 1);
    setListIngredients(newListIngredients);
  };

  let listIngredients = [];
  if (list.length !== 0 && list !== null) {
    listIngredients = list.map((ingredient) => {
      return (
        <ShoppingListIngredient
          ingredient={ingredient.name}
          key={ingredient.id}
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
        <button>Filter</button>
      </div>
    </div>
  );
};

export default ShoppingListContent;
