
import React, {createContext, useState, useEffect} from 'react';

export const FavContext= createContext();



export const FavProvider = (props) => {

  const [favCocktails,setFavCocktails]= useState([]) 


  useEffect(() => {

    const result=JSON.parse(localStorage.getItem("favoris"))

    if (result !== null) {
    setFavCocktails(result)
  }



  },[])

  useEffect(() => {
    const favnotnull = favCocktails.filter((cocktail) => cocktail !== null);
    localStorage.setItem("favoris", JSON.stringify(favnotnull));
  }, [favCocktails]);
  
   
    
   
   

return(

    <FavContext.Provider value={[favCocktails,setFavCocktails]}>
    {props.children}
    </FavContext.Provider>
  );
};
