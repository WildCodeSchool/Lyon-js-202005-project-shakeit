import React from "react";
import Footer from "../components/MainPage/Footer";
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
      <MenuBurger/>
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
