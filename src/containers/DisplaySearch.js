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
  const [valueAPI, setValueAPI] = useState([]);
  const [testPic, setTestPic] = useState([]);
  let testAPI = [];
  let testAPI2 = [];

  const useStyles = makeStyles((theme) => ({
    inputRoot: {
      color: "white",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue",
      },
      "&.MuiFormLabel-root .MuiFormLabel-colorSecondary .MuiInputLabel-root .MuiInputLabel-formControl .MuiInputLabel-animated .MuiInputLabel-outlined": {
        color: "white",
      },
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    setValueAPI(value);
    value.map((i) =>
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${i}`)
        .then((response) => response.data)
        .then((data) => {
          testAPI = testAPI.concat(data["drinks"].map((i) => i.strDrink));
          testAPI2 = testAPI2.concat(
            data["drinks"].map((i) => i.strDrinkThumb)
          );
          setValueAPI(testAPI);
          setTestPic(testAPI2);
        })
    );
  }, [value]);

  return (
    <div className="searchBar">
      <Autocomplete
        onChange={(e, newValue) => {
          setValue(newValue.map((i) => i.ingredient));
        }}
        multiple
        classes={classes}
        options={liste_ingredient}
        getOptionLabel={(option) => option.ingredient}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Ingrédients"
            placeholder="Choisissez vos ingrédients favoris"
          />
        )}
      />
      <div>
        {valueAPI.map((item, i) => (
          <div key={i}>
            <CocktailList>
              <Link to={`/recipePage/${valueAPI[i]}`}>
                <img src={testPic[i]} alt="Cocktail Thumb" />
                <CocktailRate>{valueAPI[i]}</CocktailRate>
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
    </div>
  );
}
export default DisplaySearch;
