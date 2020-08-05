import React, {createContext} from 'react';

export const AuthentContext= createContext();


export const AuthentProvider = (props) => {

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
          fakeAuth.isAuthenticated = true;
          setTimeout(cb, 100); // fake async
        },
        signout(cb) {
          fakeAuth.isAuthenticated = false;
          setTimeout(cb, 100);
        }
      };

return(

    <AuthentContext.Provider value={fakeAuth}>
    {props.children}
    </AuthentContext.Provider>



);

}

 