import React from "react";
import GridLayout from "./components/Central Page/GridLayout";
import Footer from "./components/Central Page/Footer";
import Main from "./components/Central Page/Main";
import Header from "./components/Central Page/Header";
import Search from "./components/Central Page/Search";
import DisplayCocktails from "./containers/DisplayCocktails";
import DisplaySearch from "./containers/DisplaySearch"


export default function App() {
  return (

    <>
    <GridLayout>
    <Header>

      <img  className="logo" src="https://i.ibb.co/3znmZs9/Daco-4332189.png" alt="Daco-4332189" border="0"/>
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
      
    
    <i className="fa fa-2x fa-refresh" aria-hidden="true"></i>
    <i className="fa fa-2x fa-list" aria-hidden="true"></i>
    <i  className=" clickable  fa-2x fa fa-heart"  aria-hidden="true" value="test"></i>
    <i className="fa fa-2x fa-user" aria-hidden="true"></i>
    {/* <i class="fa fa-2x fa-bars" aria-hidden="true"></i> */}
   

    
    </Footer>

    </>
  );
}

