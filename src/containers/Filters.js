import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";
import CocktailList from "../components/MainPage/CocktailList";
import { FavContext } from "../context/FavContext";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header.js";
import Navbar from "./Navbar";
import Title from "./../components/MainPage/Title";
import CocktailLogo from "./Logo";
import PopularCocktails from "./PopularCocktails";

const Filters = () => {
  const [apiCategories, setApiCategories] = useState([]);
  const [apiResults, setApiResults] = useState([]);
  const [optionChosen, setOptionChosen] = useState("Ordinary_Drink");
  const [favCocktails, setFavCocktails] = useContext(FavContext);

  const apiRequestCategories = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.data)
      .then((data) => setApiCategories(data.drinks));
  };

  const apiRequestCocktails = (cat) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((response) => response.data)
      .then((data) => setApiResults(data.drinks));
  };

  const handleChange = (e) => {
    setOptionChosen(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiResults([]);
    apiRequestCocktails(optionChosen);
  };

  useEffect(() => {
    apiRequestCategories();
  }, []);

  return (
    <>
      <div>
        <Header>
          <Link to="/main">
            <CocktailLogo />
          </Link>
          <Title>ShakeIt</Title>
        </Header>
      </div>

      <h2>Categories List</h2>
      
      <form onSubmit={handleSubmit}>
        <select value={optionChosen} onChange={handleChange}>
          {apiCategories.map((category, i) => (
            <option key={i} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
        <button>Go !</button>
      </form>
      <p> {apiResults.length} results</p>

      {apiResults.map((cocktail, i) => (
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

<Link to="/popularcocktails">
      <PopularCocktails />
      </Link>

      <Footer>
        <Navbar />
      </Footer>
    </>
  );
};

export default Filters;
