import React, {useContext} from "react";
import {AuthentContext} from "../context/AuthentContext";
import { useHistory} from "react-router-dom";

const LogOut = ({ item }) => {
  
    const history=useHistory();

    const {user,auth} = useContext(AuthentContext);
const fakeAuth=auth;
const [currentUser,setCurrentUser]=user;
   
    
const disconnect = () => {

    // fakeAuth.signout(() => {
    //     history.push("/");

    // });

    setCurrentUser(null);
    history.push("/");

};


  return (
      
    
      <button onClick={disconnect}>Logout</button>
    
  );
};

export default LogOut;
