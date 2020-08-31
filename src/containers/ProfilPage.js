import React from "react";
import CocktailLogo from "./Logo";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import MenuBurger from './MenuBurger';
import Navbar from "./Navbar";
import Title from "./../components/MainPage/Title";
import ProfilePageContent from "./ProfilePageContent";
import ProfilePageCss from "../components/ProfilPage/ProfilePageCss";

const ProfilPage = () => {
  return (
    <div>
      {/* <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <Title>ShakeIt</Title>
        <LogOut />

      </Header> */}
      
    {/* <MenuBurger />
      <h1 style={{color:'rgba(0, 185, 205,1)'}}>Your Profile</h1>

      </Header> */}
      <ProfilePageCss>
        <ProfilePageContent />
      </ProfilePageCss>


      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default ProfilPage;
