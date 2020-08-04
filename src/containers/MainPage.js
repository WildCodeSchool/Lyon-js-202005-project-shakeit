import React from "react";
import GridLayout from "./../components/MainPage/GridLayout";
import Footer from "./../components/MainPage/Footer";
import Main from "./../components/MainPage/Main";
import Header from "./../components/MainPage/Header";
import Search from "./../components/MainPage/Search";
import DisplayCocktails from "./DisplayCocktails";
import DisplaySearch from "./DisplaySearch";
import Navbar from "./Navbar";
import LogOutPage from "./LogOutPage";


const MainPage = (props) => {

  
  
  return (
    <div>
      <GridLayout>
        <Header>
          <img
            className="logo"
            src="https://i.ibb.co/3znmZs9/Daco-4332189.png"
            alt="Daco-4332189"
            border="0"
          />
          <h1>ShakeIt</h1>
          <LogOutPage  />
        </Header>

        <Search>
          <DisplaySearch />
        </Search>

        <Main>
          <DisplayCocktails  />
        </Main>
      </GridLayout>

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default MainPage;
