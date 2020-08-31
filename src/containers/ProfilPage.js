import React from "react";
import Footer from "../components/MainPage/Footer";
import MenuBurger from "./MenuBurger";
import Navbar from "./Navbar";
import ProfilePageContent from "./ProfilePageContent";
import ProfilePageCss from "../components/ProfilPage/ProfilePageCss";

const ProfilPage = () => {
  return (
    <div>
      <MenuBurger />
      <h1 style={{ color: "rgba(0, 185, 205,1)" }}>My Infos</h1>
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
