import React, {useContext} from "react";
import {AuthentContext} from "../context/AuthentContext";
import { useHistory} from "react-router-dom";
import LogButton from "../components/LogButton"


const LogOut = ({ item }) => {
    
    const history=useHistory();

    const [auth,setAuth] = useContext(AuthentContext);
   
    
const disconnect = () => {


    setAuth(false);
    history.push("/");
    
};


  return (   

      <LogButton  onClick={disconnect} width={60}>Logout</LogButton>    
    
  );
};

export default LogOut;
