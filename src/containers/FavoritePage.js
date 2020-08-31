import React, {useContext, useState} from "react";
import Footer from "../components/MainPage/Footer";
import { Link } from "react-router-dom";
import MenuBurger from './MenuBurger';
import Navbar from "./Navbar";
import Title from "./../components/MainPage/Title";
import {FavContext} from "../context/FavContext";
import CocktailList from "./../components/MainPage/CocktailList";
import DisplayFavCocktail from "./DisplayFavCocktail";

const FavoritePage = () => {
  const [favCocktails,setFavCocktails]= useContext(FavContext);
  const [fav,setFav]= useState(true);

  return (
    <div>
      <MenuBurger/>
      <h1 style={{color:'rgba(0, 185, 205,1)'}}>Your Favorites</h1>
      <CocktailList>
      {favCocktails.map( (cocktail) => (
        <DisplayFavCocktail 
        key={cocktail.id} 
        favCocktails={favCocktails} 
        setFavCocktails={setFavCocktails} 
        name={cocktail.title} 
        id={cocktail.id} 
        img={cocktail.img}/> ))}
      </CocktailList>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default FavoritePage;

