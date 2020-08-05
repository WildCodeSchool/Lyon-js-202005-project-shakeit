import React, {useContext} from "react";
import {AuthentContext} from "../context/AuthentContext";
import { useHistory} from "react-router-dom";

const LogOut = ({ item }) => {
    const fakeAuth=useContext(AuthentContext);
    const history=useHistory();
   
    
const disconnect = () => {

    fakeAuth.signout(() => {
        history.push("/");

    });

};


  return (
      
    
      <button onClick={disconnect}>Logout</button>
    
  );
};

export default LogOut;
