import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <Link to="/main">
        <FontAwesomeIcon icon="cocktail" style={{width:'24px', height:'auto'}}   color="#3DE0D7"  />
      </Link>
      <Link to="/shoppinglistpage">
        <FontAwesomeIcon icon="list" style={{width:'24px', height:'auto'}} color="#3DE0D7" />
      </Link>
      <Link to="/favoritepage">
        <FontAwesomeIcon icon="heart" style={{width:'24px', height:'auto'}} color="#3DE0D7" />
      </Link>
      <Link to="/profilpage">
        <FontAwesomeIcon icon="user" style={{width:'24px', height:'auto'}} color="#3DE0D7" />
      </Link>
    </>
  );
};

export default Navbar;
