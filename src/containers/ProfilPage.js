import React from "react";
import Footer from "../components/MainPage/Footer";
import LogOut from "./LogOut";
import MenuBurger from "./MenuBurger";
import Navbar from "./Navbar";
import ProfilePageContent from "./ProfilePageContent";
import ProfilePageCss from "../components/ProfilPage/ProfilePageCss";
import Title from "./../components/MainPage/Title";

const ProfilPage = () => {
  return (
    <div>
      <MenuBurger />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title>My Infos</Title>

        <LogOut />
      </div>

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
