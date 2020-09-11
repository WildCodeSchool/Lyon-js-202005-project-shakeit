import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Form from "./Form";
import LoginPageLayout from "../../components/LoginPageLayout";
import { AuthentContext } from "../../context/AuthentContext";
import { LoginDatabaseContext } from "../../context/LoginDatabaseContext";
import md5 from "md5-hash";
import * as ReactBootStrap from "react-bootstrap";
import logoAccueil from "../../img/logoAccueil.png";

const LoginPage = (props) => {
  // USE CONTEXT
  const identifiants = useContext(LoginDatabaseContext);
  const [auth, setAuth] = useContext(AuthentContext);

  const [Login, setLogin] = useState(identifiants.login);
  const [Mdp, setMdp] = useState(identifiants.mdp);

  const loginHandleChange = (e) => {
    setLogin(e.target.value);
  };

  const mdpHandleChange = (e) => {
    setMdp(e.target.value);
  };

  const loginForm = (e) => {
    setTimeout(e.preventDefault(), 100);
   
      setAuth("true");
      history.replace(from);
    
  };

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/main" } };

  return (
    <>
      <LoginPageLayout>
        <ReactBootStrap.Navbar.Brand
          style={{
            color: "black",
            fontFamily: "Sacramento",
            fontSize: "400%",
            fontWeight: "bold",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        >
          Shake it
        </ReactBootStrap.Navbar.Brand>
        <div className="img-container-log">
          <img src={logoAccueil} alt="cocktail Logo" width="200px" />
        </div>

        <Form
          loginForm={loginForm}
          loginHandleChange={loginHandleChange}
          mdpHandleChange={mdpHandleChange}
        />
      </LoginPageLayout>
    </>
  );
};

export default LoginPage;
