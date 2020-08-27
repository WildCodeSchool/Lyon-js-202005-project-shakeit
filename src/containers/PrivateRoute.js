import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthentContext } from "../context/AuthentContext";

function PrivateRoute({ component: Component, ...rest }) {
  const [auth, setAuth] = useContext(AuthentContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
