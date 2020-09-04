import React, { useContext, useState } from "react";
import FavoriteDisplay from "../components/FavoritePage/FavoriteDisplay";
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
        <h1 style={{ color: "rgba(0, 185, 205,1)", textAlign: "center" }}>
          My Favorites
        </h1>
        <FavoriteDisplay>
          {favCocktails.map((cocktail) => (
            <CocktailList>
              <DisplayFavCocktail
                key={cocktail.id}
                favCocktails={favCocktails}
                setFavCocktails={setFavCocktails}
                name={cocktail.title}
                id={cocktail.id}
                img={cocktail.img}
              />
            </CocktailList>
          ))}
        </FavoriteDisplay>
      </div>

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default FavoritePage;
