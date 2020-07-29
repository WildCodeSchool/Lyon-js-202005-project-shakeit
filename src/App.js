import React from "react";
import MainPage from "./containers/MainPage.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              {/* container Authentification */}
            </Route>
            <Route path="/main" exact component={MainPage} />
          </Switch>
        </>
      </Router>
      <MainPage />
    </>
  );
}
