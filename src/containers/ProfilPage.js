import React from "react";
import CocktailLogo from "./Logo";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import Navbar from "./Navbar";
import Title from "./../components/MainPage/Title";

const ProfilPage = () => {
  return (
    <div>
      <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <Title>ShakeIt</Title>
        <LogOut />
      </Header>

      <h1>Your Profile</h1>

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default ProfilPage;
