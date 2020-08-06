import React, {useContext} from "react";
import {AuthentContext} from "../context/AuthentContext";
import { useHistory} from "react-router-dom";


const LogOut = ({ item }) => {
    
    const history=useHistory();

    const [auth,setAuth] = useContext(AuthentContext);
   
    
const disconnect = () => {


    setAuth(false);
    history.push("/");
    
};


  return (     
      <button onClick={disconnect}>Logout</button>
    
  );
};

export default LogOut;
