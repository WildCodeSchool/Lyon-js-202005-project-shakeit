import React from "react";
import Footer from "../components/MainPage/Footer";
import LogOut from "./LogOut";
import MenuBurger from "./MenuBurger";
import Navbar from "./Navbar";
import ProfilePageContent from "./ProfilePageContent";
import ProfilePageCss from "../components/ProfilPage/ProfilePageCss";

const ProfilPage = () => {
  return (
    <div>
      <MenuBurger />
      <div
        style={{
          witdh: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "rgba(0, 185, 205,1)" }}>My Infos</h1>

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
