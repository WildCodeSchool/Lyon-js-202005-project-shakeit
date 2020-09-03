import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from "react-router-dom";
function MenuBurger(){
    return(
      <div >
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="" style={{backgroundColor:'white'}} variant="light">
      <Link to='/main'>
  <ReactBootStrap.Navbar.Brand style={{color:'black',fontFamily:'Sacramento', fontSize:'220%', fontWeight:'bold'}}>Shake it</ReactBootStrap.Navbar.Brand>
  </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <Link to='/popularcocktails'>
      <ReactBootStrap.Nav.Link href="#features">Most popular cocktails</ReactBootStrap.Nav.Link>
      </Link>
      <ReactBootStrap.NavDropdown title="Sorted by categories" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Ordinary Drink</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Cocktail</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Milk / Float / Shake</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Other / Unknown</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Cocoa</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Shot</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Coffee / Tea</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Homemade Liqueur</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Punch / Party Drink</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Beer</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Soft Drink / Soda</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
</div>
);
}
export default MenuBurger;