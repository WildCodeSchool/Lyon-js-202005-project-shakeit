import React from "react";
import GridLayout from "./components/GridLayout";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";


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
      <h2>MAIN</h2>
      </Main>
        
          
    </GridLayout>

    <Footer>
      
    <h2>FOOTER</h2>
    </Footer>

    </>
  );
}

