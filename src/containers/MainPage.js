import React  from "react";
import {useHistory} from "react-router-dom"
import GridLayout from "./../components/MainPage/GridLayout";
import Footer from "./../components/MainPage/Footer";
import Main from "./../components/MainPage/Main";
import Search from "./../components/MainPage/Search";
import Title from "./../components/MainPage/Title";
import DisplayCocktails from "./DisplayCocktails";
import DisplaySearch from "./DisplaySearch";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import Global from "./../components/MainPage/Global";
import MenuBurger from './MenuBurger';
import LogButton from '../components/LogButton';
const MainPage = () => {

  const history=useHistory();
  return (
    <>
    <Global /> 
      <GridLayout>
        <MenuBurger/>
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
