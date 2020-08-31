import React from "react";
import LogButton from "../../components/LogButton"

const Form = (props) => {

    return (
        <>
        
        
          <form onSubmit={props.loginForm}>
              
            <label className="labelForm">Login : </label>
            <input className="inputForm" onChange={props.loginHandleChange} /><br></br>
           

            
            <label>Mdp : </label>
            <input type='password' onChange={props.mdpHandleChange} /><br></br>
            <LogButton type="submit" marginleft={150} width={100} >Sign Up</LogButton>
            
           
          </form>
          
        </>
      );


};


export default Form;