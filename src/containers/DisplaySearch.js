import React, { useState, useEffect, useContext } from "react";
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
import {FavContext} from "../context/FavContext";
import {faHeart} from "@fortawesome/free-regular-svg-icons"
import DisplayCocktail from "./DisplayCocktail";

function DisplaySearch() {
  const [value, setValue] = useState([]);
  const [cocktailName, setCocktailName] = useState([]);
  const [cocktailImage, setCocktailImage] = useState([]);
   const [cocktailId, setCocktailId] = useState([]);
  const [apiResponse,setApiResponse]=useState([]);
  let apiName = [];
  let apiImage = [];
  let apiCocktailId = [];
  const [favCocktails,setFavCocktails]= useContext(FavContext);
  const useStyles = makeStyles((theme) => ({input: {color: "black "}}));
  const classes = useStyles();

  useEffect(() => {
    setCocktailName(value);
    value.map((i) =>
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${i}`) 
        .then((response) => response.data)
        .then((data) => {    
          const tabData=Object.values(data)
          setApiResponse(tabData[0]);      
          apiCocktailId = apiCocktailId.concat(data["drinks"].map((i) => i.idDrink));
          apiName = apiName.concat(data["drinks"].map((i) => i.strDrink));
          apiImage = apiImage.concat(data["drinks"].map((i) => i.strDrinkThumb));
          setCocktailName(apiName);
          setCocktailImage(apiImage);
          setCocktailId(apiCocktailId);
        })
    );
}, [value]);

  return (
    <>
    <div className="searchBar" >
      <Autocomplete
        onChange={(e, newValue) => {
          setValue(newValue.map((i) => i.ingredient));
        }}
        multiple
        classes={classes}
        options={liste_ingredient}
        getOptionLabel={(option) => option.ingredient}
        style={{ width: 300}}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="What's inside your fridge?"
          />
        )}
      />
      </div>
      <div>
        {cocktailName.map((item, i) => (
          <div key={i}>
            <CocktailList>
            <DisplayCocktail 
            key={item.id} 
            favCocktails={favCocktails} 
            setFavCocktails={setFavCocktails} 
            id={cocktailId[i]} 
            name={cocktailName[i]}  
            img={cocktailImage[i]}/>          
            </CocktailList>
          </div>
        ))}
      </div>
      </>
  );
}
export default DisplaySearch;

