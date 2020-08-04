import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faStar} from '@fortawesome/free-solid-svg-icons'


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

library.add(faStar, faHeart)

export default function App() {
  return (
    <>
      <Router>
        <Link to="/main">Page Principale</Link>
        <Link to="/recipepage">Page Recette</Link>

        <Switch>
          <Route exact path="/">
            {/* container Authentification */}
          </Route>
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage/:cocktailName" component={RecipePage} />
        </Switch>
      </Router>
    </>
  );
}
