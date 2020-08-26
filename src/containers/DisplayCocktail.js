import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CocktailRate from "./../components/MainPage/CocktailRate";


const DisplayCocktail = ({favCocktails,setFavCocktails,...rest}) => {

    console.log(rest);
    const [fav,setFav]= useState(true)

return (

<>


<Link to={`/recipePage/${rest.name}`}>
      <img src={rest.img} alt="Cocktail Thumb" />
      </Link>
      <CocktailRate>
            {rest.name}
          </CocktailRate>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          
          <FontAwesomeIcon  
          onClick={ () => {
          
            setFav(!fav);
            const filteredCocktails= favCocktails.filter ( favcocktail => rest.id !== favcocktail.id)
            setFavCocktails(filteredCocktails);
            

          }} 
          
          
          icon="heart" />

</>

)


};

export default DisplayCocktail;