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
        <i className="fa fa-2x fa-list" aria-hidden="true"></i>
      </Link>

      <i
        className=" clickable  fa-2x fa fa-heart"
        aria-hidden="true"
        value="test"
      ></i>
      <i className="fa fa-2x fa-user" aria-hidden="true"></i>
    </>
  );
};

export default Navbar;
