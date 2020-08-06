import React, {
  createContext
} from "react";

export const AuthContext = createContext();


export const AuthProvider = (props) => {

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

    <
    AuthContext.Provider value = {
      fakeAuth
    } > {
      props.children
    } <
    /AuthContext.Provider>


  );

}