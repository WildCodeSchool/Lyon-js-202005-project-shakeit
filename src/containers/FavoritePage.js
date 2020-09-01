import React, { useContext, useState } from "react";
import Footer from "../components/MainPage/Footer";
import MenuBurger from "./MenuBurger";
import Navbar from "./Navbar";
import { FavContext } from "../context/FavContext";
import CocktailList from "./../components/MainPage/CocktailList";
import DisplayFavCocktail from "./DisplayFavCocktail";

const FavoritePage = () => {
  const [favCocktails, setFavCocktails] = useContext(FavContext);
  const [fav, setFav] = useState(true);

   
  
 
  

  return (
    <div>

      <div>
        <MenuBurger />
        <h1 style={{ color: "rgba(0, 185, 205,1)" }}>My Favorites</h1>
        <CocktailList>
          {favCocktails.map((cocktail) => (
            <DisplayFavCocktail
              key={cocktail.id}
              favCocktails={favCocktails}
              setFavCocktails={setFavCocktails}
              name={cocktail.title}
              id={cocktail.id}
              img={cocktail.img}
            />
          ))}
        </CocktailList>
      </div>

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default FavoritePage;
