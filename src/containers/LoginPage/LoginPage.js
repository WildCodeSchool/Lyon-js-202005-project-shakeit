import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Form from "./Form";
import LoginPageLayout from "../../components/LoginPageLayout"
import {AuthentContext} from "../../context/AuthentContext";
import {LoginDatabaseContext} from "../../context/LoginDatabaseContext"
import md5 from "md5-hash";



const LoginPage = props => {

  

// USE CONTEXT
 const identifiants = useContext(LoginDatabaseContext);
 const [auth,setAuth] = useContext(AuthentContext);

 

  const [Login, setLogin] = useState("p2");
  const [Mdp, setMdp] = useState("p2mdp");
  

  

  const loginHandleChange = e => {
    setLogin(e.target.value);
  };

  const mdpHandleChange = e => {
    setMdp(e.target.value);
  };

  const loginForm = e => {

    setTimeout(e.preventDefault(), 100);
    if (md5(Login) === identifiants.login && md5(Mdp) === identifiants.mdp) {
      
      setAuth("true");
  history.replace(from);      
       
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
