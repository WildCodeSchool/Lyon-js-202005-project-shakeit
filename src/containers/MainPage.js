import React from "react";
import GridLayout from "./../components/MainPage/GridLayout";
import Footer from "./../components/MainPage/Footer";
import Main from "./../components/MainPage/Main";
import Header from "./../components/MainPage/Header";
import Search from "./../components/MainPage/Search";
import DisplayCocktails from "./DisplayCocktails";
import DisplaySearch from "./DisplaySearch";

const MainPage = () => {
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
        </Header>

        <Search>
          <DisplaySearch />
        </Search>

        <Main>
          <DisplayCocktails />
        </Main>
      </GridLayout>

      <Footer>
        <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
        <i class="fa fa-2x fa-list" aria-hidden="true"></i>
        <i
          className=" clickable  fa-2x fa fa-heart"
          aria-hidden="true"
          value="test"
        ></i>
        <i className="fa fa-2x fa-user" aria-hidden="true"></i>
        {/* <i class="fa fa-2x fa-bars" aria-hidden="true"></i> */}
      </Footer>
    </div>
  );
};

export default MainPage;
