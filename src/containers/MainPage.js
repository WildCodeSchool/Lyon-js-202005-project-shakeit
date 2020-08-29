import React  from "react";
import {useHistory} from "react-router-dom"
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
import Global from "./../components/MainPage/Global";
import CocktailLogo from "./Logo";
import MenuBurger from './MenuBurger'
const MainPage = () => {

  const history=useHistory();
  return (
    <>
    <Global /> 
    <div>
   
      <GridLayout>
        {/* <Header> */}
        <MenuBurger/>
          {/* <Link to="/main">
            <CocktailLogo />
          </Link> */}
          {/* <Title>Shake It</Title> */}
          
          {/* <LogOut /> */}
        {/* </Header> */}
        <Search style={{marginTop:"10px"}}>
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
