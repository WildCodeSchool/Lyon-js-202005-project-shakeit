import React from "react";
import LogButton from "../../components/LogButton";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.loginForm}>
        
        <LogButton type="submit" marginleft={150} width={100}>
          Entrer sur le site
        </LogButton>
      </form>
    </>
  );
};

export default Form;
