import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./../components/MainPage/Footer";
import Ingredients from "./Ingredients";



class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecipe: {},
    };
    this.getRecipe = this.getRecipe.bind(this);
    this.getIngredients = this.getIngredients.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
   
  }


  getRecipe() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          dataRecipe: data.drinks[0],
        });
      });
  }

  getIngredients(dataRecipe) {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      ingredients.push({
        name: dataRecipe["strIngredient" + i],
        measure: dataRecipe["strMeasure" + i],
        id: i,
      });
    }
    return ingredients.filter((ingredient) => ingredient.name != null);
  }

  

  render() {
    let dataRecipe = this.state.dataRecipe;
   
  
    return (
      <div>
        <h2>RecipeMain container</h2>
     
         {/* <LogOutPage fakeAuth={this.props.fakeAuth} /> */}
        <button onClick={this.getRecipe}>Random recipe</button>
        <h2>Cocktail : {dataRecipe.strDrink}</h2>
        <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
        <p>{dataRecipe.strInstructions}</p>
        <ul>
          List of ingredients :
          {this.getIngredients(dataRecipe).map((item) => {
            return <Ingredients item={item} key={item.id} />;
          })}
        </ul>
        <Footer>
          <Navbar />
        </Footer>
      </div>
    );
  }
}

export default RecipePage;
