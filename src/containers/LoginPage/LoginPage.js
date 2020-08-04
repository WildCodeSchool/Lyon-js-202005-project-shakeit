import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Form from "./Form";




const LoginPage = props => {
  const identifiants = {
    login: "p2",
    mdp: "p2mdp"
  };

  const [Login, setLogin] = useState("");
  const [Mdp, setMdp] = useState("");

  const loginHandleChange = e => {
    setLogin(e.target.value);
  };

  const mdpHandleChange = e => {
    setMdp(e.target.value);
  };

  const loginForm = e => {
    setTimeout(e.preventDefault(), 100);
    if (Login === identifiants.login && Mdp === identifiants.mdp) {
      props.fakeAuth.authenticate(() => {
        history.replace(from);
      });
    } else alert("Erreur identifiants");
  };

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/main" } };

  return (
    <>  
    
     <Form loginForm={loginForm} loginHandleChange={loginHandleChange} mdpHandleChange={mdpHandleChange}/>
     

     </>
  );
};

export default LoginPage;
