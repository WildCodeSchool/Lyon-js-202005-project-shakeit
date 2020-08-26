import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from "./liste_ingredient.js";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();
  const Search = ({ value }) => (
    <button className="button-secondary pure-button" disabled="">
      {value}
    </button>
  );

  return (
    <div className="searchBar">
      <Autocomplete
        classes={classes}
        onChange={(event, value) => setValue((value) => value.concat(value))}
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
  );
}
