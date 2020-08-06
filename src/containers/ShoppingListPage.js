import React from "react";
import Footer from "../components/MainPage/Footer";
import GridLayout from "../components/MainPage/GridLayout";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ShoppingListContent from "./ShoppingListContent";
import CocktailLogo from "./Logo";
import Title from "./../components/MainPage/Title";

const ShoppingListPage = (props) => {
  return (
    <div>
      <GridLayout>
        <Header>
          <Link to="/main">
            <CocktailLogo />
          </Link>
          <Title>ShakeIt</Title>
        </Header>
        <ShoppingListContent list={props.listIngredients} />
      </GridLayout>

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default ShoppingListPage;
