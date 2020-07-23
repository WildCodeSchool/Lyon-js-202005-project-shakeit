import React from "react";
import GridLayout from "./components/Central Page/GridLayout";
import Footer from "./components/Central Page/Footer";
import Main from "./components/Central Page/Main";
import Header from "./components/Central Page/Header";
import Search from "./components/Central Page/Search";
import DisplayCocktails from "./containers/DisplayCocktails";


export default function App() {
  return (

    <>
    <GridLayout>

    <Header>
    <h2>HEADER</h2>
      </Header>
      <Search>
      <h2>SEARCH</h2>
     </Search>
      
      
      <Main>
      
      <DisplayCocktails />
      </Main>
        
          
    </GridLayout>

    <Footer>
      
    <h2>FOOTER</h2>
    </Footer>

    </>
  );
}

