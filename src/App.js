import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import LoginPage from "./containers/LoginPage/LoginPage"
import {LoginDatabaseProvider} from "./context/LoginDatabaseContext"
import {AuthentProvider} from "./context/AuthentContext";
import PrivateRoute from "./containers/PrivateRoute";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faStar} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


library.add(faStar, faHeart)

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
