import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CocktailRate from "./../components/MainPage/CocktailRate";
import {faHeart} from "@fortawesome/free-regular-svg-icons"

const DisplayCocktail = ({favCocktails,setFavCocktails,...rest}) => {

    
    const [fav,setFav]= useState(false)
  

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
          {fav? 
         
          <FontAwesomeIcon  
          onClick={ () => {
          
            setFav(!fav);
            const filteredCocktails= favCocktails.filter ( favcocktail => rest.id !== favcocktail.id)
            setFavCocktails(filteredCocktails);
            

          }} 
          
          
          icon="heart" /> :
          
          <FontAwesomeIcon 
          
          onClick={ () => {
           
            setFav(!fav);
            
            setFavCocktails( [...favCocktails,{id :rest.id, img : rest.img , title:rest.name }]);
            

          }} 
          
          icon={faHeart} />}

</>

)


};

export default DisplayCocktail;