import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="cocktailList">
      <Link to={`/recipePage/${dataRecipe.strDrink}`}>
        <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
        <div className="cocktailInfos">
          <p className="cocktailTitle">{dataRecipe.strDrink}</p>
          <div className="cocktailRate">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <i
            className=" clickable fa fa-heart"
            aria-hidden="true"
            value="test"
          ></i>
        </div>
      </Link>
    </div>
  );
}

export default RandomCocktail;
