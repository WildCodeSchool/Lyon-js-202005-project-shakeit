import React, {createContext} from 'react';


export const LoginDatabaseContext= createContext();


export const LoginDatabaseProvider = (props) => {

    const identifiants = {
        login: "1d665b9b1467944c128a5575119d1cfd", //f
        mdp: "5cef00a3b11989380be79e59b26f8f19"  //
      };

     
     


return(

    <LoginDatabaseContext.Provider value={identifiants}>
    {props.children}
    </LoginDatabaseContext.Provider>



);

}