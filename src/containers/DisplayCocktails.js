import React, {useState, useContext} from "react";
import RandomCocktails from "./RandomCocktails.js";
import {FavContext} from "../context/FavContext";

import "font-awesome/css/font-awesome.min.css";

const DisplayCocktails = () => {


  // Hooks déclaration
  const [favCocktails,setFavCocktails]= useContext(FavContext)
  
  
 



  return (
    <>
      <h2>Cocktails du jour</h2>
      <RandomCocktails favCocktails={favCocktails} setFavCocktails={setFavCocktails} />
      <RandomCocktails favCocktails={favCocktails}  setFavCocktails={setFavCocktails}  />
      <RandomCocktails favCocktails={favCocktails} setFavCocktails={setFavCocktails} />
      <RandomCocktails favCocktails={favCocktails} setFavCocktails={setFavCocktails} />
      <RandomCocktails favCocktails={favCocktails} setFavCocktails={setFavCocktails} />
      <RandomCocktails favCocktails={favCocktails} setFavCocktails={setFavCocktails} />
      
    </>
  );
};

export default DisplayCocktails;
