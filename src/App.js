import React, { useState } from "react";
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
import Filters from "./containers/Filters"
import {
  faHeart,
  faStar,
  faCocktail,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";

library.add(faStar, faHeart, faCocktail, faList, faUser);

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
            <PrivateRoute path="/profilpage" component={ProfilPage} />
            <PrivateRoute path="/favoritepage" component={FavoritePage} />
            <Route path="/filters" component={Filters} />
            
            </FavProvider>
          </AuthentProvider>
        </LoginDatabaseProvider>
      </Switch>
    </>
  );
}
