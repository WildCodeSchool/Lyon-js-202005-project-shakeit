import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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


  render() {
    let dataRecipe = this.state.dataRecipe;
    return (
      <div className="cocktailList">
        <Link to={`/recipePage/${dataRecipe.strDrink}`}>
          <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
          {/* <a href="localhost">
          <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
        </a> */}
          <div className="cocktailInfos">
            <p className="cocktailTitle">{dataRecipe.strDrink}</p>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon ="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="heart" /> 

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
