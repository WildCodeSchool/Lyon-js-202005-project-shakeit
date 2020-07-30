import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import LoginPage from "./containers/LoginPage/LoginPage"
import PrivateRoute from "./containers/PrivateRoute";
import LogOutPage from "./containers/LogOutPage";
//import ProtectedPage from "./containers/ProtectedPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };


  return (
    <>
      <Router>
        
        
        

        <Switch>
         
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage" component={RecipePage} />
          <Route exact path="/">
          <LoginPage fakeAuth={fakeAuth}  />
          </Route>
          <Route path="/login">
            <LoginPage fakeAuth={fakeAuth}  />
          </Route>
          <PrivateRoute path="/protected" fakeAuth={fakeAuth}>
          <Link to="/main">Page Principale</Link>
        <Link to="/recipepage">Page Recette</Link>
            
            <LogOutPage fakeAuth={fakeAuth} />
          </PrivateRoute >
        </Switch>
      </Router>
    </>
  );
}
