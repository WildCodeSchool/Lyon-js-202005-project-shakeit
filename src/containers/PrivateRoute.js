import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthentContext} from "../context/AuthentContext";

function PrivateRoute({ component: Component, ...rest }) {

    const fakeAuth=useContext(AuthentContext);
    console.log("Authentifié avant redirection Main?"+fakeAuth.isAuthenticated)
    return (
      <Route
        {...rest}
        render={(props) =>
          true ? (
            <Component {...props} {...rest}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;