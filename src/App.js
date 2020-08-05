import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import ArbreTest from './containers/ArbreTest.js';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
    <ArbreTest />
      <Router>
        <Link to="/main">Page Principale</Link>
        <Link to="/recipepage">Page Recette</Link>

        <Switch>
          <Route exact path="/">
            {/* container Authentification */}
          </Route>
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage" component={RecipePage} />
        </Switch>
      </Router>
    </>
  );
}
