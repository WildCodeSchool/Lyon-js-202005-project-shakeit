import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <i className="fa fa-2x fa-refresh" aria-hidden="true"></i>
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
