import React from "react";
import GridLayout from "./../components/MainPage/GridLayout";
import Footer from "./../components/MainPage/Footer";
import Main from "./../components/MainPage/Main";
import Header from "./../components/MainPage/Header";
import Search from "./../components/MainPage/Search";
import Title from "./../components/MainPage/Title";
import DisplayCocktails from "./DisplayCocktails";
import DisplaySearch from "./DisplaySearch";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import LogOut from "./LogOut";
import Global from "./../components/MainPage/Global";
import CocktailLogo from "./Logo"
const MainPage = () => {
  return (
    <>
    <Global />
    <div>
      <GridLayout>
        <Header>
        
          <Link to="/main">
            <CocktailLogo />
          </Link>
          <Title>ShakeIt</Title>
          <LogOut />
        </Header>
        <Search>
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
    </>
  );
};

export default MainPage;
