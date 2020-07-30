import React from "react";
import RandomCocktails from "./RandomCocktails.js";
import "font-awesome/css/font-awesome.min.css";

const DisplayCocktails = () => {
  return (
    <>
      <h2>Cocktails du jour</h2>
      
          <RandomCocktails />
          <RandomCocktails />
          <RandomCocktails />
       
    </>
  );
};

export default DisplayCocktails;
