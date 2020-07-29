import React from "react";
import axios from "axios";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecipe: {},
    };
    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        console.log("data", data);
        console.log("data.drinks[0]", data.drinks[0]);
        this.setState({
          dataRecipe: data.drinks[0],
        });
      });
  }
  render() {
    let dataRecipe = this.state.dataRecipe;
    return (
      <div>
        <h2>RecipeMain container</h2>
        <button onClick={this.getRecipe}>Random recipe</button>
        <h2>Name : {dataRecipe.strDrink}</h2>
        <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
        <ul>
          List of ingredients :
          <li>
            {dataRecipe.strMeasure1} {dataRecipe.strIngredient1}
          </li>
          <li>
            {dataRecipe.strMeasure2} {dataRecipe.strIngredient2}
          </li>
          <li>
            {dataRecipe.strMeasure3} {dataRecipe.strIngredient3}
          </li>
          <li>
            {dataRecipe.strMeasure4} {dataRecipe.strIngredient4}
          </li>
          <li>
            {dataRecipe.strMeasure5} {dataRecipe.strIngredient5}
          </li>
          <li>
            {dataRecipe.strMeasure6} {dataRecipe.strIngredient6}
          </li>
          <li>
            {dataRecipe.strMeasure7} {dataRecipe.strIngredient7}
          </li>
          <li>
            {dataRecipe.strMeasure8} {dataRecipe.strIngredient8}
          </li>
          <li>
            {dataRecipe.strMeasure9} {dataRecipe.strIngredient9}
          </li>
          <li>
            {dataRecipe.strMeasure10} {dataRecipe.strIngredient10}
          </li>
          <li>
            {dataRecipe.strMeasure11} {dataRecipe.strIngredient11}
          </li>
          <li>
            {dataRecipe.strMeasure12} {dataRecipe.strIngredient12}
          </li>
          <li>
            {dataRecipe.strMeasure13} {dataRecipe.strIngredient13}
          </li>
          <li>
            {dataRecipe.strMeasure14} {dataRecipe.strIngredient14}
          </li>
          <li>
            {dataRecipe.strMeasure15} {dataRecipe.strIngredient15}
          </li>
        </ul>
      </div>
    );
  }
}

export default RecipePage;

// url https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
