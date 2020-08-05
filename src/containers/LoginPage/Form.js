import React from "react";

const Form = (props) => {

    return (
        <>
        
        
          <form onSubmit={props.loginForm}>
              
            <label className="labelForm">Login : </label>
            <input className="inputForm" onChange={props.loginHandleChange} /><br></br>
           

            
            <label>Mdp : </label>
            <input onChange={props.mdpHandleChange} /><br></br>
            <button type="submit">Sign Up</button>

           
          </form>
          
        </>
      );


};


export default Form;