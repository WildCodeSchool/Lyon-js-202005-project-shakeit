import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "./AuthContext";



function PrivateRoute({ children, ...rest }) {

  const fakeAuth= useContext(AuthContext)
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;