import React, {useContext, useState} from "react";
import CocktailLogo from "./Logo";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Title from "./../components/MainPage/Title";
import {FavContext} from "../context/FavContext";
import CocktailList from "./../components/MainPage/CocktailList";
import DisplayFavCocktail from "./DisplayFavCocktail"

const FavoritePage = () => {

  const [favCocktails,setFavCocktails]= useContext(FavContext)
  const [fav,setFav]= useState(true)

  return (
    <div>
      <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <Title>ShakeIt</Title>
      </Header>
      <div>
      <h1>Your Favorites</h1>
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
    
    </div>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default FavoritePage;


