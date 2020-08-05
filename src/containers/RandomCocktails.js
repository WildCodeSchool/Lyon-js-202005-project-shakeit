import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CocktailList from "./../components/MainPage/CocktailList";
import CocktailRate from "./../components/MainPage/CocktailRate";
function RandomCocktail() {
  const [dataRecipe, setDataRecipe] = useState({});

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
              <CocktailRate >
                <p>{dataRecipe.strDrink}</p>
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon ="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="heart" /> 
              </CocktailRate>
        </Link>
      </CocktailList>
    
  );

}

export default RandomCocktail;
