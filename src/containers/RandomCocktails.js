import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import CocktailList from "./../components/MainPage/CocktailList";
import CocktailRate from "./../components/MainPage/CocktailRate";

import { useSnackbar } from "notistack";

function RandomCocktail({ favCocktails, setFavCocktails }) {
  const [dataRecipe, setDataRecipe] = useState({});
  const [fav, setFav] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickSuccess = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${dataRecipe.strDrink} added to your favorites!`, {
      variant,
    });
  };

  const handleClickError = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${dataRecipe.strDrink} removed from your favorites!`, {
      variant,
    });
  };

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
            handleClickError("error");
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
            handleClickSuccess("success");
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
