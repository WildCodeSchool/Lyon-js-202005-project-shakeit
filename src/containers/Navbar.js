import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <Link to="/main">
        <FontAwesomeIcon icon="cocktail" size="3x" color="white" />
      </Link>
      <Link to="/shoppinglistpage">
        <FontAwesomeIcon icon="list" size="3x" color="white" />
      </Link>
      <Link to="/favoritepage">
        <FontAwesomeIcon icon="heart" size="3x" color="white" />
      </Link>
      <Link to="/profilpage">
        <FontAwesomeIcon icon="user" size="3x" color="white" />
      </Link>{" "}
    </>
  );
};

export default Navbar;
