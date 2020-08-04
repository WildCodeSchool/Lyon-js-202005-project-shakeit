import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import ShoppingListPage from "./containers/ShoppingListPage.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* container Authentification */}
          </Route>
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage/:cocktailName" component={RecipePage} />
          <Route path="/shoppinglistpage" component={ShoppingListPage} />
        </Switch>
      </Router>
    </>
  );
}
