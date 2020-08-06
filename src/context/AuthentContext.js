import React, {createContext, useState} from 'react';

export const AuthentContext= createContext();


export const AuthentProvider = (props) => {




  const [auth,setAuthent]=useState(false);


    // const fakeAuth = {
    //     isAuthenticated: false,
       
    //     authenticate(cb) {
    //       fakeAuth.isAuthenticated = true;
    //       setTimeout(cb, 100); // fake async
    //     },
    //     signout(cb) {
    //       fakeAuth.isAuthenticated = false;
    //       setTimeout(cb, 100);
    //     }
    //   };

return(

    <AuthentContext.Provider value={[auth,setAuthent]}>
    {props.children}
    </AuthentContext.Provider>



);

}

 