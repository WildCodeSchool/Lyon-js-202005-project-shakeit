import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./../components/MainPage/Footer";
import Ingredients from "./Ingredients";

function RecipePage(props) {
  const [dataRecipe, setDataRecipe] = useState();
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
      ingredients.push({
        name: dataRecipe["strIngredient" + i],
        measure: dataRecipe["strMeasure" + i],
        id: i,
      });
    }
    return ingredients.filter((ingredient) => ingredient.name != null);
  };

  let listOfIngredients = [];
  if (dataRecipe !== undefined && dataRecipe !== null) {
    listOfIngredients = getIngredients(dataRecipe).map((item) => {
      return (
        <Ingredients
          item={item}
          key={item.id}
          addIngredient={props.addIngredient}
        />
      );
    });
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>RecipeMain container</h2>
      <button onClick={getDetailedRecipe}>Random recipe</button>
      <h2>Cocktail : {dataRecipe.strDrink}</h2>
      <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
      <p>{dataRecipe.strInstructions}</p>
      <ul>List of ingredients :{listOfIngredients}</ul>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
}

export default RecipePage;
