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
import MenuBurger from './MenuBurger';
import LogButton from '../components/LogButton';
const MainPage = () => {

  const history=useHistory();
  return (
    <>
    <Global /> 
      <GridLayout>
        {/* <Header> */}
        <MenuBurger/>
          {/* <Link to="/main">
            <CocktailLogo />
          </Link> */}
          {/* <Title>Shake It</Title> */}


          {/* <Link to ="/filters">
          <LogButton width={60} >Filtre</LogButton>
          </Link> */}


          {/* <LogOut /> */}
        {/* </Header> */}
        <Search style={{marginTop:"10px"}}>
          <DisplaySearch/>
        </Search>
        <Main>
          <DisplayCocktails />
        </Main>
      </GridLayout>
      <Footer>
        <Navbar />
      </Footer>
    </>
  );
};

export default MainPage;
