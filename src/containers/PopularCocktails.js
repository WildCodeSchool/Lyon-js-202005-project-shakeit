import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FavContext } from "../context/FavContext";
import CocktailList from "../components/MainPage/CocktailList";
import DisplayCocktail from "./DisplayCocktail";
import Footer from "../components/MainPage/Footer";
import Navbar from "./Navbar";
import MenuBurger from "./MenuBurger";
const PopularCocktails = () => {
  const [apiRequest, setApiRequest] = useState([]);
  const [famousCocktails, setFamousCocktails] = useState([
    "Margarita",
    "Mojito",
    "Rum Punch",
    "Long Island ",
    "Daiquiri",
    "Manhattan",
    "Moscow Mule",
    "Pina",
    "sex on the beach",
    "blue lagoon",
    "cosmopolitan",
    "Caipirinha",
    "spritz",
    "tequila sunrise",
  ]);
  const [favCocktails, setFavCocktails] = useContext(FavContext);

  const apiRequestCategories = (cocktailName) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      )
      .then((response) => response.data)
      .then((data) => data.drinks)
      .then((drinks) => setApiRequest((searches) => [...searches, drinks[0]]));
  };

  useEffect(() => {
    famousCocktails.map((cocktail) => apiRequestCategories(cocktail));
  }, []);

  return (
    <>
      <div>
        <MenuBurger />
      </div>
      {apiRequest.map((cocktail, i) => (
        <CocktailList>
          <DisplayCocktail
            favCocktails={favCocktails}
            setFavCocktails={setFavCocktails}
            id={cocktail.idDrink}
            img={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
          />
        </CocktailList>
      ))}
      <Footer>
        <Navbar />
      </Footer>
    </>
  );
};

export default PopularCocktails;
