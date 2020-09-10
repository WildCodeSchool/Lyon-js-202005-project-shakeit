import React from "react";
import LogButton from "../../components/LogButton";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.loginForm}>
        <div className="form-field">
          <label className="labelForm">Login : </label>
          <input className="inputForm" onChange={props.loginHandleChange} />
          <br></br>
        </div>

        <div className="form-field">
          <label>Mdp : </label>
          <input type="password" onChange={props.mdpHandleChange} />
        </div>
        <br></br>
        <LogButton type="submit" marginleft={150} width={100}>
          Sign In
        </LogButton>
      </form>
    </>
  );
};

export default Form;
