import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FavContext } from "../context/FavContext";
import CocktailList from "../components/MainPage/CocktailList";
import DisplayCocktail from "./DisplayCocktail";
import Footer from "../components/MainPage/Footer";
import Navbar from "./Navbar";
import MenuBurger from "./MenuBurger";

function Other() {
  const [result, setResult] = useState([]);
  const [favCocktails, setFavCocktails] = useContext(FavContext);
  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown")
      .then((response) => response.data)
      .then((data) => setResult(data.drinks));
  }, []);
  console.log(result);
  return (
    <>
      <MenuBurger />
      {result.map((cocktail, i) => (
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
}

export default Other;
