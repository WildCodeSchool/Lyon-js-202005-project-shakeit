import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthentContext} from "../context/AuthentContext";

function PrivateRoute({ children, ...rest }) {

    const fakeAuth=useContext(AuthentContext);
    console.log("Authentifié avant redirection Main?"+fakeAuth.isAuthenticated)
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