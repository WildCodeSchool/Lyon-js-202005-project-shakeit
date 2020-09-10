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
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function RecipePage({ addIngredient, ...props }) {
  const [dataRecipe, setDataRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(1);
  const [avg, setAvg] = useState(0);
  const [nbRates, setNbRates] = useState(0);

  const avgGet = (dataId) => {
    fetch("https://shakeit.social-car.fr/rates", { method: "GET" })
      .then((response) => response.json())
      .then((json) => {
        if (dataId !== null) {
          // Get Nb Rates
          const FilteredRates = json["nbRates"].filter(
            (rate) => rate._id === dataId
          );

          FilteredRates.length
            ? setNbRates(FilteredRates[0]["NbRates"])
            : setNbRates(0);

          // Get Avg Rate

          const avgFilters = json["avg"].filter(
            (cocktail) => cocktail["_id"] === dataId
          );
          avgFilters.length
            ? setAvg(Math.round(avgFilters[0].average * 10) / 10)
            : setAvg(null);
        }
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.match.params.cocktailName}`
      )
      .then((response) => response.data)
      .then((data) => {
        setDataRecipe(data.drinks[0]);
        setLoading(false);
        avgGet(data.drinks[0].idDrink);
      });
  }, [rate]);

  const handleClick = (newValue) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idCocktail: dataRecipe.idDrink, rate: newValue }),
    };

    fetch("https://shakeit.social-car.fr/rates", requestOptions).then(
      (response) => {
        setTimeout(() => {
          setRate(0);
        }, 1000);
      }
    );
  };

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
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="rating"
            value={avg}
            precision={0.1}
            onChange={(event, newValue) => {
              // handleClick(newValue);
              setRate(newValue);
            }}
          />
          {avg === null
            ? `( 0 / 5 - 0 Votes )`
            : ` (${avg} / 5 - ${nbRates} Votes )
              `}
        </Box>

        <CocktailInstructions>
          {dataRecipe.strInstructions}
        </CocktailInstructions>
        <ul style={{ padding: "0", marginBottom: "0" }}>{listOfIngredients}</ul>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rate this cocktail!</Typography>
            <Rating
              name="sables bretons"
              value={rate}
              precision={0.5}
              onChange={(event, newValue) => {
                handleClick(newValue);
                setRate(newValue);
              }}
            />
          </Box>
        </div>
      </RecipePageStyle>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
}

export default RecipePage;
