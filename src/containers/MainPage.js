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
import CocktailLogo from "./Logo"
import LogButton from "../components/LogButton"
import Filters from "./Filters"
const MainPage = () => {

  const history=useHistory();
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
          <Link to="/filters">
          <LogButton  width={60} >Filter</LogButton>
          </Link>
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
