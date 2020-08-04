import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import LoginPage from "./containers/LoginPage/LoginPage"

import {  Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      
        

        <Switch>
          <Route exact path="/" component={LoginPage}>
            {/* container Authentification */}
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage/:cocktailName" component={RecipePage} />
        </Switch>
      
    </>
  );
}
