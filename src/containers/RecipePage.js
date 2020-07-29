import React from "react";
import axios from "axios";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecipe: {},
      isLoading: true,
    };
    this.getRecipe = this.getRecipe.bind(this);
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
          isLoading: false,
        });
      });
  }
  render() {
    return (
      <div>
        <h2>RecipeMain container</h2>
        <button onClick={this.getRecipe}>Show a recipe</button>
        {this.state.isLoading ? (
          <h2>"Loading..."</h2>
        ) : (
          <h2>Cocktail : {this.state.dataRecipe.strDrink}</h2>
        )}
      </div>
    );
  }
}

export default RecipePage;

// url https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
