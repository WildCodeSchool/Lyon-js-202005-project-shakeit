
import React from "react";
import axios from "axios";
import Navbar from "./Navbar"
import Footer from "./../components/MainPage/Footer";
import RecipePageBtn from "./RecipePageBtn"

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecipe: {},
    };
    this.getRecipe = this.getRecipe.bind(this);
    this.strIngredientX = this.strIngredientX.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        // console.log("data", data);
        // console.log("data.drinks[0]", data.drinks[0]);
        this.setState({
          dataRecipe: data.drinks[0],
        });
      });
  }
  /* EBAUCHE DE FONCTION POUR REMPLACER LA LISTE D'INGREDIENT EN DUR */
  
    strIngredientX(num) {
     //let dataRecipe = this.state.dataRecipe;
     let strIngredient = "this.state.dataRecipe.strIngredient"+num;
     let strMeasure = "this.state.dataRecipe.strMeasure"+num;
    
    return (
      strIngredient ? 
      <li>
        <img 
            src={"https://www.thecocktaildb.com/images/ingredients/`${dataRecipe.strIngredient}`-Small.png"}
            alt={strIngredient}
            />
          {strMeasure} {strIngredient}
        </li>  : 
        null
    )
       
      
        //  <li>
        //  <img 
        //      src={"https://www.thecocktaildb.com/images/ingredients/"+strIngredient+"-Small.png"}
        //      alt={strIngredient}
        //      />
        //    {strMeasure} {strIngredient}
        //  </li>   :
        //  null};
   }

  //  let tab = [dataRecipe.strIngredient1, dataRecipe.strIngredient2]

  render() {
    let dataRecipe = this.state.dataRecipe;
    return (
      <div>
        <h2>RecipeMain container</h2>
        <button onClick={this.getRecipe}>Random recipe</button>
        <h2>Name : {dataRecipe.strDrink}</h2>
        <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />

        <p>{dataRecipe.strInstructions}</p>
        <ul>
          List of ingredients :
        {dataRecipe.strIngredient1 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient1}-Small.png`}
              alt={dataRecipe.strIngredient1}
              />
            {dataRecipe.strMeasure1} {dataRecipe.strIngredient1} <RecipePageBtn />
          </li> :
          null}

          {/* APPEL DE LA FONCTION AVEC EN PARAMETRE LE NUMERO CORRESPONDANT */}
          {this.strIngredientX(1)}
          {dataRecipe.strIngredient2 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient2}-Small.png`}
              alt={dataRecipe.strIngredient2}
              />
            {dataRecipe.strMeasure2} {dataRecipe.strIngredient2} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient3 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient3}-Small.png`}
              alt={dataRecipe.strIngredient3}
              />
            {dataRecipe.strMeasure3} {dataRecipe.strIngredient3} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient4 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient4}-Small.png`}
              alt={dataRecipe.strIngredient4}
              />
            {dataRecipe.strMeasure4} {dataRecipe.strIngredient4} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient5 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient5}-Small.png`}
              alt={dataRecipe.strIngredient5}
              />
            {dataRecipe.strMeasure5} {dataRecipe.strIngredient5} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient6 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient6}-Small.png`}
              alt={dataRecipe.strIngredient6}
              />
            {dataRecipe.strMeasure6} {dataRecipe.strIngredient6} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient7 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient7}-Small.png`}
              alt={dataRecipe.strIngredient7}
              />
            {dataRecipe.strMeasure7} {dataRecipe.strIngredient7} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient8 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient8}-Small.png`}
              alt={dataRecipe.strIngredient8}
              />
            {dataRecipe.strMeasure8} {dataRecipe.strIngredient8} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient9 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient9}-Small.png`}
              alt={dataRecipe.strIngredient9}
              />
            {dataRecipe.strMeasure9} {dataRecipe.strIngredient9} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient10 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient10}-Small.png`}
              alt={dataRecipe.strIngredient10}
              />
            {dataRecipe.strMeasure10} {dataRecipe.strIngredient10} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient11 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient11}-Small.png`}
              alt={dataRecipe.strIngredient11}
              />
            {dataRecipe.strMeasure11} {dataRecipe.strIngredient11} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient12 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient12}-Small.png`}
              alt={dataRecipe.strIngredient12}
              />
            {dataRecipe.strMeasure12} {dataRecipe.strIngredient12} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient13 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient13}-Small.png`}
              alt={dataRecipe.strIngredient13}
              />
            {dataRecipe.strMeasure13} {dataRecipe.strIngredient13} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient14 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient14}-Small.png`}
              alt={dataRecipe.strIngredient14}
              />
            {dataRecipe.strMeasure14} {dataRecipe.strIngredient14} <RecipePageBtn />
          </li> :
          null}
          {dataRecipe.strIngredient15 ? 
          <li>
          <img 
              src={`https://www.thecocktaildb.com/images/ingredients/${dataRecipe.strIngredient15}-Small.png`}
              alt={dataRecipe.strIngredient15}
              />
            {dataRecipe.strMeasure15} {dataRecipe.strIngredient15} <RecipePageBtn />
          </li> :
          null}
        </ul>
        <Footer>
          <Navbar />
        </Footer>
      </div>
    );
  }
}

export default RecipePage;

// url https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// url pour image des ingrédients : https://www.thecocktaildb.com/images/ingredients/{gin}-Small.png 
