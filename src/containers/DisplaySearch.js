import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from "./liste_ingredient.js";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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

function DisplaySearch() {
  const [value, setValue] = useState([]);

  const [filteredCocktails, setFilteredCocktails] = useState([]);

  const classes = useStyles();
  // const Search = ({ value }) => (
  //   <button className="button-secondary pure-button" disabled="">
  //     {value}
  //   </button>
  // );

  return (
    <>
      <div>
        <Autocomplete
          classes={classes}
          // onChange={(event, value) => {
          //   console.log(event);
          //   setValue((value) => value.concat(value));
          // }}
          onChange={(e, newValue) => {
            console.log("newvalue", newValue);
            setValue(newValue);
            console.log("value" + value);

            /*************** */
            newValue.map((elem) =>
              axios
                .get(
                  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
                    elem.ingredient
                )
                .then((response) => response.data)
                .then((data) => {
                  setFilteredCocktails((prevState) =>
                    prevState.length > data.drinks.length
                      ? data.drinks
                      : data.drinks.concat(prevState)
                  );
                  console.log("filteredCocktails: ", data.drinks);
                })
            );

            /*************** */
          }}
          multiple
          options={liste_ingredient}
          getOptionLabel={(option) => option.ingredient}
          style={{ width: 300 }}
          variant="outlined"
          renderInput={(params) => (
            <TextField
              {...params}
              style={{ FontColor: "white" }}
              variant="outlined"
              label="Ingrédients"
              placeholder="Choisissez vos ingrédients"
              color="secondary"
            />
          )}
        />
      </div>

      <button
      // onClick={() => {
      //   //console.log(value[0].ingredient);

      //   //Appel à l'API
      //   value.map((elem) =>
      //     axios
      //       .get(
      //         "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      //           elem.ingredient
      //       )
      //       .then((response) => response.data)
      //       .then((data) => {
      //         setFilteredCocktails(data.drinks);
      //         console.log("filteredCocktails: ", data.drinks);
      //       })
      //   );
      // }}
      >
        Loupe
      </button>
      <p>{filteredCocktails.length}</p>

      <div>
        {filteredCocktails.map((cocktail, i) => (
          <div key={i}>
            <img
              src={cocktail.strDrinkThumb}
              width="100px"
              height="auto"
              alt="Cocktail Thumb"
            />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default DisplaySearch;
