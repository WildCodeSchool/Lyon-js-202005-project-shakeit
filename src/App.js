import React, { useState, useContext, useEffect } from "react";
import FavoritePage from "./containers/FavoritePage";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import ShoppingListPage from "./containers/ShoppingListPage.js";
import LoginPage from "./containers/LoginPage/LoginPage";
import { LoginDatabaseProvider } from "./context/LoginDatabaseContext";
import { AuthentProvider } from "./context/AuthentContext";
import { FavProvider } from "./context/FavContext";
import PrivateRoute from "./containers/PrivateRoute";
import ProfilPage from "./containers/ProfilPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import Filters from "./containers/Filters";
import { SnackbarProvider } from "notistack";
import "./App.css";
import {
  faHeart,
  faStar,
  faCocktail,
  faList,
  faUser,
  faCartPlus,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";
import PopularCocktails from "./containers/PopularCocktails";
import Beer from "./containers/Beer";
import Shot from "./containers/Shot";
import Soft from "./containers/Soft";
import Punch from "./containers/Punch";
import Other from "./containers/Other";
import Ordinary from "./containers/Ordinary";
import Milk from "./containers/Milk";
import Homemade from "./containers/Homemade";
import Coffee from "./containers/Coffee";
import Cocoa from "./containers/Cocoa";
import Cocktail from "./containers/Cocktail";

library.add(
  faStar,
  faHeart,
  faCocktail,
  faList,
  faUser,
  faCartPlus,
  faShoppingCart,
  faTimes
);

export default function App() {
  const [listIngredients, setListIngredients] = useState([]);

  return (
    <>
      <Switch>
        <LoginDatabaseProvider>
          <AuthentProvider>
            <FavProvider>
              <Route exact path="/" component={LoginPage} />
              <PrivateRoute path="/main" component={MainPage} />
              <SnackbarProvider
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                maxSnack={3}
                autoHideDuration={2000}
              >
                <PrivateRoute
                  path="/recipepage/:cocktailName"
                  component={RecipePage}
                  addIngredient={(ingredient) => {
                    setListIngredients([ingredient, ...listIngredients]);
                  }}
                />
                <PrivateRoute
                  path="/shoppinglistpage"
                  component={ShoppingListPage}
                  listIngredients={listIngredients}
                  setListIngredients={setListIngredients}
                />
              </SnackbarProvider>

              <PrivateRoute path="/profilpage" component={ProfilPage} />
              <PrivateRoute path="/favoritepage" component={FavoritePage} />
              <PrivateRoute path="/filters" component={Filters} />
              <PrivateRoute
                path="/popularcocktails"
                component={PopularCocktails}
              />
              <PrivateRoute path="/beer" component={Beer} />
              <PrivateRoute path="/soft" component={Soft} />
              <PrivateRoute path="/shot" component={Shot} />
              <PrivateRoute path="/punch" component={Punch} />
              <PrivateRoute path="/ordinary" component={Ordinary} />
              <PrivateRoute path="/other" component={Other} />
              <PrivateRoute path="/milk" component={Milk} />
              <PrivateRoute path="/homemade" component={Homemade} />
              <PrivateRoute path="/coffee" component={Coffee} />
              <PrivateRoute path="/cocoa" component={Cocoa} />
              <PrivateRoute path="/cocktail" component={Cocktail} />
            </FavProvider>
          </AuthentProvider>
        </LoginDatabaseProvider>
      </Switch>
    </>
  );
}
