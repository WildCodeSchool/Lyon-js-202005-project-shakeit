import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class RandomCocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecipe: {},
    };
    this.getCocktail = this.getCocktail.bind(this);
  }

  componentDidMount() {
    this.getCocktail();
  }

  getCocktail() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          dataRecipe: data.drinks[0],
        });
      });
  }

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
        </Link>
      </div>
    );
  }
}

export default RandomCocktail;
