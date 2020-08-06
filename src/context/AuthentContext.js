
import React, {createContext, useState} from 'react';

export const AuthentContext= createContext();


export const AuthentContext = createContext();

export const AuthentProvider = (props) => {

  const [auth,setAuthent]=useState(false);   

return(

    <AuthentContext.Provider value={[auth,setAuthent]}>
    {props.children}
    </AuthentContext.Provider>
  );
};
