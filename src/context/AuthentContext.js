import React, {createContext, useState} from 'react';

export const AuthentContext= createContext();


export const AuthentProvider = (props) => {


const [currentUser,setCurrentUser]= useState(null);

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


      const [isAuthenticated,setAuthenticated]= useState(false);

return(

    <AuthentContext.Provider   value={{user:[currentUser,setCurrentUser],auth:[isAuthenticated,setAuthenticated]}}>
    {props.children}
    </AuthentContext.Provider>



);

}

 