import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      {/* <Link to="/main">
        <FontAwesomeIcon icon="cocktail" style={{backgroundColor:'whitesmoke',width:'24px', height:'auto'}}   color='rgb(241,159,5)'/>
      </Link>
      <Link to="/shoppinglistpage">
        <FontAwesomeIcon icon="list" style={{backgroundColor:'whitesmoke',width:'24px', height:'auto'}} color='rgb(241,159,5)'/>
      </Link>
      <Link to="/favoritepage">
        <FontAwesomeIcon icon="heart" style={{backgroundColor:'whitesmoke',width:'24px', height:'auto'}} color='rgb(241,159,5)'/>
      </Link>
      <Link to="/profilpage">
        <FontAwesomeIcon icon="user" style={{backgroundColor:'whitesmoke',width:'24px', height:'auto'}} color='rgb(241,159,5)'/>
      </Link> */}
            <Link to="/main">
        <FontAwesomeIcon icon="cocktail" style={{backgroundColor:'white',width:'24px', height:'auto'}}   color='#00b9cd'/>
      </Link>
      <Link to="/shoppinglistpage">
        <FontAwesomeIcon icon="list" style={{backgroundColor:'white',width:'24px', height:'auto'}} color='#00b9cd'/>
      </Link>
      <Link to="/favoritepage">
        <FontAwesomeIcon icon="heart" style={{backgroundColor:'white',width:'24px', height:'auto'}} color='#00b9cd'/>
      </Link>
      <Link to="/profilpage">
        <FontAwesomeIcon icon="user" style={{backgroundColor:'white',width:'24px', height:'auto'}} color='#00b9cd'/>
      </Link>
    </>
  );
};

export default Navbar;
