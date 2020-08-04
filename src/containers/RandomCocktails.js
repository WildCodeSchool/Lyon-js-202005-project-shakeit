import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import {AuthContext} from "./AuthContext";




const RandomCocktail = () => {
  

  const [dataRecipe,setDatarecipe]=useState({});
  const fakeAuth= useContext(AuthContext)
 
  const getCocktail= () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        setDatarecipe({
          dataRecipe: data.drinks[0],
        });
      });
  }

  

  useEffect(() => { getCocktail() },[]);

  
  
  
    return (
        <div className="cocktailList">
          
            <a href="/recipepage" fakeAuth={fakeAuth} >
                <img src={dataRecipe.strDrinkThumb} alt="Cocktail Thumb" />
            </a>
           
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
        </div>
    );
    
      
}

export default RandomCocktail;


