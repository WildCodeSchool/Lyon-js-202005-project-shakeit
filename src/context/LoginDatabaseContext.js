import React, {createContext} from 'react';
import { useEffect } from 'react';


export const LoginDatabaseContext= createContext();


export const LoginDatabaseProvider = (props) => {


useEffect(() => {

    fetch("https://shakeit.social-car.fr/users/login")
    .then ( response => response.json())
    .then ( json =>{
    
    identifiants.login = json[0]['login']
    identifiants.mdp= json[0]['mdp']


},[])

})

const identifiants = {};

     
     


return(

    <LoginDatabaseContext.Provider value={identifiants}>
    {props.children}
    </LoginDatabaseContext.Provider>



);

}