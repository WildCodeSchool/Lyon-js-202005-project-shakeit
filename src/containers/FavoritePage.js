import React from "react";
import CocktailLogo from "./Logo";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import Navbar from "./Navbar";

const FavoritePage = () => {
  return (
    <div>
      <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <h1>ShakeIt</h1>
        <LogOut />
      </Header>

      <h1>Your FavoritePage</h1>

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default FavoritePage;
