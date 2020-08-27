import React, {useContext, useState} from "react";
import CocktailLogo from "./Logo";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import Navbar from "./Navbar";
import Title from "./../components/MainPage/Title";
import {FavContext} from "../context/FavContext";
import CocktailList from "./../components/MainPage/CocktailList";
import DisplayFavCocktail from "./DisplayCocktail"

const FavoritePage = () => {

  const [favCocktails,setFavCocktails]= useContext(FavContext)
  const [fav,setFav]= useState(true)

  return (
    <div>
      <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <Title>ShakeIt</Title>
        <LogOut />
      </Header>
   
      <div>
      <h1>Your Favorites</h1>
      
      

      <CocktailList>
      {favCocktails.map( (cocktail) => (
        <DisplayFavCocktail key={cocktail.id} favCocktails={favCocktails} setFavCocktails={setFavCocktails} name={cocktail.title} id={cocktail.id} img={cocktail.img}/> ))}
      </CocktailList>



     

      
      
     
    </div>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default FavoritePage;


{/* <CocktailList>
      
      <Link to={`/recipePage/${favCocktails.id}`}>
        <img src={favCocktails.img} alt="Cocktail Thumb" />
        </Link>
          <CocktailRate>
            {dataRecipe.strDrink}
          </CocktailRate>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          {fav? 
          <FontAwesomeIcon  
          // onClick={ () => {
          
          //   setFav(!fav);
          //   const filteredCocktails= favCocktails.filter ( cocktail => cocktail.id !== dataRecipe.idDrink)
          //   setFavCocktails(filteredCocktails);
            

          // }} 
          
          
          icon="heart" />:
          <FontAwesomeIcon 
          
          // onClick={ () => {
           
          //   setFav(!fav);
            
          //   setFavCocktails( [...favCocktails,{id :dataRecipe.idDrink, img : dataRecipe.strDrinkThumb , title:dataRecipe.strDrink }]);
            

          // }} 
          
          icon={faHeart} />}
          
         



        
      
    </CocktailList> */}

