import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import CocktailList from "./../components/MainPage/CocktailList";
import CocktailRate from "./../components/MainPage/CocktailRate";

function RandomCocktail({ favCocktails, setFavCocktails }) {
  const [dataRecipe, setDataRecipe] = useState({});
  const [fav, setFav] = useState(false);

  const getRandomCocktail = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        setDataRecipe(data.drinks[0]);
      });
  };

  useEffect(() => {
    getRandomCocktail();
  }, []);

  return (
    <CocktailList>
      <Link to={`/recipePage/${dataRecipe.strDrink}`}>
        <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
      </Link>
      <CocktailRate>{dataRecipe.strDrink}</CocktailRate>
      {fav ? (
        <FontAwesomeIcon
          style={{ color: "red" }}
          onClick={() => {
            setFav(!fav);
            const filteredCocktails = favCocktails.filter(
              (cocktail) => cocktail.id !== dataRecipe.idDrink
            );
            setFavCocktails(filteredCocktails);
          }}
          icon="heart"
        />
      ) : (
        <FontAwesomeIcon
          style={{ color: "red" }}
          onClick={() => {
            setFav(!fav);
            setFavCocktails([
              ...favCocktails,
              {
                id: dataRecipe.idDrink,
                img: dataRecipe.strDrinkThumb,
                title: dataRecipe.strDrink,
                favStatus: true,
              },
            ]);
          }}
          icon={faHeart}
        />
      )}
    </CocktailList>
  );
}

export default RandomCocktail;
