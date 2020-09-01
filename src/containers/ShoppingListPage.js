import React from "react";
import Footer from "../components/MainPage/Footer";
import Navbar from "./Navbar";
import MenuBurger from "./MenuBurger";
import ShoppingListContent from "./ShoppingListContent";

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
