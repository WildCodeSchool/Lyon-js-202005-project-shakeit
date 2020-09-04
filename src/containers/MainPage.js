import React from "react";
import GridLayout from "./../components/MainPage/GridLayout";
import Footer from "./../components/MainPage/Footer";
import Main from "./../components/MainPage/Main";
import Search from "./../components/MainPage/Search";
import DisplayCocktails from "./DisplayCocktails";
import DisplaySearch from "./DisplaySearch";
import Navbar from "./Navbar";
import Global from "./../components/MainPage/Global";
import MenuBurger from "./MenuBurger";

const MainPage = () => {
  return (
    <div>
      <Global />
        <MenuBurger />
        <GridLayout>
        
        <Search style={{ marginTop: "10px" }}>
          <DisplaySearch />
        </Search>
        <Main>
          <DisplayCocktails />
        </Main>
      </GridLayout>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default MainPage;
