import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import LoginPage from "./containers/LoginPage/LoginPage"
import {LoginDatabaseProvider} from "./context/LoginDatabaseContext"
import {AuthentProvider} from "./context/AuthentContext";
import PrivateRoute from "./containers/PrivateRoute";
import {  Switch, Route } from "react-router-dom";

export default function App() {

  

  return (
    <>
      
        

        <Switch>
          <LoginDatabaseProvider>
            <AuthentProvider>
          <Route exact path="/" component={LoginPage} />
                   
          

          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/main" component={MainPage} />
          <PrivateRoute path="/recipepage/:cocktailName" component={RecipePage} />
          </AuthentProvider>
          </LoginDatabaseProvider>
        </Switch>
      
    </>
  );
}
