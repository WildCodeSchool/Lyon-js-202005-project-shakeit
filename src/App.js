import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";
import LoginPage from "./containers/LoginPage/LoginPage"
import PrivateRoute from "./containers/PrivateRoute";
import {AuthProvider} from "./containers/AuthContext";
import Protected from "./containers/Protected"

//import LogOutPage from "./containers/LogOutPage";
//import Protected from "./containers/Protected"
//import ProtectedPage from "./containers/ProtectedPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {

 


 


  return (
    <>
      <Router>
        
        
        

        <Switch>
          <AuthProvider>
         
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage" component={RecipePage}  />
          <Route exact path="/">
          <LoginPage   />
          </Route>
          
          <Route path="/login">
            <LoginPage   />
          </Route>
          <PrivateRoute path="/protected" >
           <Protected />
          <MainPage  />
        
          </PrivateRoute >
          </AuthProvider>
        </Switch>
      </Router>
    </>
  );
}
