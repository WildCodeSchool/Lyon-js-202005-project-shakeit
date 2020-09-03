import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";

import Ingredients from "./Ingredients";
import MenuBurger from "./MenuBurger";
import Navbar from "./Navbar";
import Footer from "./../components/MainPage/Footer";
import CocktailImg from "./../components/RecipePage/CocktailImg";
import CocktailName from "./../components/RecipePage/CocktailName";
import CocktailInstructions from "./../components/RecipePage/CocktailInstructions";
import RecipePageStyle from "../components/RecipePage/RecipePageStyle";
import Subtitle from "./../components/MainPage/Subtitle";

function RecipePage({ addIngredient, ...props }) {
  const [dataRecipe, setDataRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDetailedRecipe = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.match.params.cocktailName}`
      )
      .then((response) => response.data)
      .then((data) => {
        setDataRecipe(data.drinks[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getDetailedRecipe();
  }, []);

  const getIngredients = (dataRecipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (
        dataRecipe["strIngredient" + i] !== null &&
        dataRecipe["strIngredient" + i] !== ""
      ) {
        ingredients.push({
          name: dataRecipe["strIngredient" + i],
          measure: dataRecipe["strMeasure" + i],
          id: uuid(),
        });
      }
    }
    return ingredients;
  };

  let listOfIngredients = [];
  if (dataRecipe !== null) {
    listOfIngredients = getIngredients(dataRecipe).map((item) => {
      return (
        <Ingredients item={item} key={item.id} addIngredient={addIngredient} />
      );
    });
  }

  if (loading) {
    return <Subtitle>Loading...</Subtitle>;
  }

  return (
    <div>
      <MenuBurger />
      <RecipePageStyle>
        <CocktailName>{dataRecipe.strDrink}</CocktailName>
        <CocktailImg src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
        <CocktailInstructions>
          {dataRecipe.strInstructions}
        </CocktailInstructions>
        <ul style={{ padding: "0" }}>{listOfIngredients}</ul>
      </RecipePageStyle>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
}

export default RecipePage;
