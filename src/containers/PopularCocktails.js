import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FavContext } from "../context/FavContext";
import CocktailList from "../components/MainPage/CocktailList";
import DisplayCocktail from "./DisplayCocktail";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header.js";
import Navbar from "./Navbar";
import CocktailLogo from "./Logo";
import Title from "./../components/MainPage/Title";

const PopularCocktails = () => {
    const [apiRequest,setApiRequest] = useState([]);
    const [famousCocktails,setFamousCocktails] = useState(["Margarita","Mojito","Rum Punch","Long Island ", "Daiquiri","Manhattan","Moscow Mule","Pina","sex on the beach","blue lagoon","cosmopolitan","Caipirinha","spritz","tequila sunrise"])
    const [favCocktails, setFavCocktails] = useContext(FavContext);

    const apiRequestCategories = (cocktailName) => {
        axios
          .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
          .then((response) => response.data)
          .then((data) => data.drinks)
          .then ((drinks) => setApiRequest ( searches => [...searches,drinks[0]]));
      };

      useEffect(() => {
        famousCocktails.map( (cocktail) => apiRequestCategories(cocktail) )
        ;
      }, []);

    return(
        <>
        <div>
        <Header>
          <Link to="/main">
            <CocktailLogo />
          </Link>
          <Title>ShakeIt</Title>
        </Header>
      </div>
    <h2>Welcome Popular cocktails </h2>
    <h3>{famousCocktails.length} cocktails</h3>
    {apiRequest.map((cocktail, i) => (
        <CocktailList>
          <DisplayCocktail
            favCocktails={favCocktails}
            setFavCocktails={setFavCocktails}
            id={cocktail.idDrink}
            img={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
          />
        </CocktailList>
      ))}
      <Footer>
        <Navbar />
      </Footer>
      </>
    )
}

export default PopularCocktails;