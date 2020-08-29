import React, {useState, useContext} from "react";
import RandomCocktails from "./RandomCocktails.js";
import {FavContext} from "../context/FavContext";

import "font-awesome/css/font-awesome.min.css";

const DisplayCocktails = () => {


  // Hooks déclaration
  const [favCocktails,setFavCocktails]= useContext(FavContext)
  
  
 



  return (
    <>

      <h2 style={{fontSize:'120%', color:'#3DE0D7'}}>Some cocktails ( just for you )</h2>
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
