import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CocktailRate from "../components/MainPage/CocktailRate";
import CocktailList from "../components/MainPage/CocktailList";
import "font-awesome/css/font-awesome.min.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from "./liste_ingredient.js";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

function DisplaySearch() {
  const [value, setValue] = useState([]);
  const [cocktailName, setCocktailName] = useState([]);
  const [cocktailImage, setCocktailImage] = useState([]);
  let apiName = [];
  let apiImage = [];

  const useStyles = makeStyles((theme) => ({
    input: {
      color: "white"
    },
    inputRoot: {
      color: "black",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#7AD1E0",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#7AD1E0",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#7AD1E0",
      }
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    setCocktailName(value);
    value.map((i) =>
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${i}`)
        .then((response) => response.data)
        .then((data) => {
          apiName = apiName.concat(data["drinks"].map((i) => i.strDrink));
          apiImage = apiImage.concat(
            data["drinks"].map((i) => i.strDrinkThumb)
          );
          setCocktailName(apiName);
          setCocktailImage(apiImage);
        })
    );

  }, [value]);

  return (
    <>
    <div className="searchBar">
      <Autocomplete
        onChange={(e, newValue) => {
          setValue(newValue.map((i) => i.ingredient));
        }}
        multiple
        options={liste_ingredient}
        getOptionLabel={(option) => option.ingredient}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Ingredient"
            placeholder="What's inside your fridge?"
          />
        )}
      />
      </div>
      <div>
        {cocktailName.map((item, i) => (
          <div key={i}>
            <CocktailList>
              <Link to={`/recipePage/${cocktailName[i]}`}>
                <img src={cocktailImage[i]} alt="Cocktail Thumb" />
                <CocktailRate>{cocktailName[i]}</CocktailRate>
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="heart" />
              </Link>
            </CocktailList>
          </div>
        ))}
      </div>
    
    </>
  );
}
export default DisplaySearch;
