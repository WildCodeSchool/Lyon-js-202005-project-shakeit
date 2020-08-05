import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Form from "./Form";
import LoginPageLayout from "../../components/LoginPageLayout"
import {LoginDatabaseContext} from "../../context/LoginDatabaseContext";
import {AuthentContext} from "../../context/AuthentContext";





const LoginPage = props => {


 
  



  

// USE CONTEXT
 const identifiants = useContext(LoginDatabaseContext);
 const fakeAuth= useContext(AuthentContext);
  

  const [Login, setLogin] = useState("");
  const [Mdp, setMdp] = useState("");

  console.log("Authentifié?"+fakeAuth.isAuthenticated)

  const loginHandleChange = e => {
    setLogin(e.target.value);
  };

  const mdpHandleChange = e => {
    setMdp(e.target.value);
  };

  const loginForm = e => {
    setTimeout(e.preventDefault(), 100);
    if (Login === identifiants.login && Mdp === identifiants.mdp) {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    } else alert("Erreur identifiants");
  };

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/main" } };

  return (
    <>  
    <LoginPageLayout>
     <Form loginForm={loginForm} loginHandleChange={loginHandleChange} mdpHandleChange={mdpHandleChange}/>
     </LoginPageLayout>

     </>
  );
};

export default LoginPage;
