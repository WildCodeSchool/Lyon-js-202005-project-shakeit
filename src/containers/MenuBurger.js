import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuBurger() {
  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg=""
        style={{ backgroundColor: "white", marginLeft: "60px" }}
        variant="light"
      >
        <Link to="/main">
          <ReactBootStrap.Navbar.Brand
            style={{
              color: "black",
              fontFamily: "Sacramento",
              fontSize: "220%",
              fontWeight: "bold",
              marginLeft: "110px",
            }}
          >
            Shake it
          </ReactBootStrap.Navbar.Brand>
        </Link>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/popularcocktails">
              Most popular cocktails
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Sorted by categories"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="/ordinary">
                Ordinary Drink
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/cocktail">
                Cocktail
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/milk">
                Milk / Float / Shake
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/other">
                Other / Unknown
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/cocoa">
                Cocoa
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/shot">
                Shot
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="coffee">
                Coffee / Tea
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/homemade">
                Homemade Liqueur
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/punch">
                Punch / Party Drink
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/beer">
                Beer
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/soft">
                Soft Drink / Soda
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}
export default MenuBurger;
