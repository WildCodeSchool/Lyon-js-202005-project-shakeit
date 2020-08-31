import React from "react";
import Footer from "../components/MainPage/Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MenuBurger from'./MenuBurger';
import ShoppingListContent from "./ShoppingListContent";
import Title from "./../components/MainPage/Title";

const ShoppingListPage = ({ listIngredients, setListIngredients }) => {
  return (
    <div>
      <MenuBurger />
      <ShoppingListContent
        list={listIngredients}
        setListIngredients={setListIngredients}
      />
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default ShoppingListPage;
