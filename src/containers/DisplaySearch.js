
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





function DisplaySearch() {
  const [value, setValue] = useState([]);
  const [cocktailName, setCocktailName] = useState([]);
  const [cocktailImage, setCocktailImage] = useState([]);
  const [apiResponse,setApiResponse]=useState([]);
  let apiName = [];
  let apiImage = [];

    // Hooks déclaration
    const [favCocktails,setFavCocktails]= useContext(FavContext)
    const [fav,setFav]= useState(false)

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

        color: "#BEDA04",

      },
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
          
          const tabData=Object.values(data)
          setApiResponse(tabData[0]);
          
         
         
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
        classes={classes}
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
                </Link>
                <CocktailRate>{cocktailName[i]}</CocktailRate>
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
               
                {fav? 
          <FontAwesomeIcon  
          onClick={ () => {
          
            setFav(!fav);
            const filteredCocktails= favCocktails.filter ( cocktail => cocktail.id !== apiResponse.idDrink)
            setFavCocktails(filteredCocktails);
            

          }} 
          
          
          icon="heart" />:
          <FontAwesomeIcon 
          
          onClick={ () => {
           
            setFav(!fav);
            
            setFavCocktails( [...favCocktails,{id :apiResponse[i].idDrink, img : apiResponse[i].strDrinkThumb , title:apiResponse[i].strDrink }]);
            

          }} 
          
          icon={faHeart} />}
              

            </CocktailList>
          </div>
        ))}
      </div>

      </>
    
  );
}
export default DisplaySearch;

