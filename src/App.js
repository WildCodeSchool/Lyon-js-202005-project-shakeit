import React, { useState } from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import ShoppingListPage from "./containers/ShoppingListPage.js";
import LoginPage from "./containers/LoginPage/LoginPage"
import {LoginDatabaseProvider} from "./context/LoginDatabaseContext"
import {AuthentProvider} from "./context/AuthentContext";
import PrivateRoute from "./containers/PrivateRoute";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faStar} from '@fortawesome/free-solid-svg-icons'
import {  Switch, Route} from "react-router-dom";


library.add(faStar, faHeart)

export default function App() {
  const [listIngredients, setListIngredients] = useState([]);

  return (
    <>
        <Switch>
          <LoginDatabaseProvider>
            <AuthentProvider>
              <Route exact path="/" component={LoginPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/main" component={MainPage}/>
              <Route path="/recipepage/:cocktailName" component={RecipePage} addIngredient={(ingredient)=>{setListIngredients([...listIngredients, ingredient])}} />
              <Route path="/shoppinglistpage" component={ShoppingListPage} listIngredients={listIngredients}/>
          </AuthentProvider>
          </LoginDatabaseProvider>

        </Switch>
      
    </>
  );
}
