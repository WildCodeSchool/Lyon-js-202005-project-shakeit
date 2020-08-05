import React, {createContext} from 'react';

export const LoginDatabaseContext= createContext();


export const LoginDatabaseProvider = (props) => {

    const identifiants = {
        login: "p2",
        mdp: "p2mdp"
      };


return(

    <LoginDatabaseContext.Provider value={identifiants}>
    {props.children}
    </LoginDatabaseContext.Provider>



);

}