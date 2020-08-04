import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const LogOutPage = props => {
  let history = useHistory();
  let location = useLocation();
  console.log("Dans MainPage : "+props.fakeAuth.isAuthenticated);

  let { from } = location.state || { from: { pathname: "/login" } };

  let logout = () => {
    props.fakeAuth.signout(() => {
      history.replace(from);
    });
  };

  return (
    <>
      <button onClick={logout}>LogOut</button>
    </>
  );
};

export default LogOutPage;
