import React, {useState, useEffect} from "react";
import 'font-awesome/css/font-awesome.min.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from './liste_ingredient.js';
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";


function DisplaySearch(){
const [value, setValue] = useState([]);
const [valueAPI, setValueAPI]=useState([]);
let testAPI=[];
const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "blue"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "blue"
    },
    "&.MuiFormLabel-root .MuiFormLabel-colorSecondary .MuiInputLabel-root .MuiInputLabel-formControl .MuiInputLabel-animated .MuiInputLabel-outlined" :{
      color: "white"
    }

    }
}));
const classes = useStyles();

useEffect(()=>
{
  console.log(value);
  setValueAPI(value);
  value.map(i=>
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${i}`)
    .then(response=>response.data)
    .then(data=>
      {
        testAPI.push(data["drinks"].map(i=>[i.strDrink, i.strDrinkThumb]))
        console.log("ICI",testAPI);
        setValueAPI(testAPI);
      }));

},[value])
        return (
          <div className="searchBar">
            <Autocomplete
              onChange={(e, newValue) =>{
              setValue(newValue.map(i=>i.ingredient));
            }}
              multiple
              classes = {classes}
              options={liste_ingredient}
              getOptionLabel={option => option.ingredient}
              style={{ width: 300}}
              renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Ingrédients"
                placeholder="Choisissez vos ingrédients favoris"
              />)}
            />

            </div>
        );
      }
      export default DisplaySearch;
