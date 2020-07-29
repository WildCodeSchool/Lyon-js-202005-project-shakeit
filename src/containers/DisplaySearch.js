import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import WriteTag from './WriteTag.js';


function DisplaySearch(){

const[tag, setTag] = useState("");

const onChange = (e) => {
    setTag(e.currentTarget.value);
    console.log(tag);
}

function write(){
// console.log("Le tag est :",tag);
return(
<p>lol</p>);  
console.log("x");  
}


return(
<>
<hr></hr>
<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossOrigin="anonymous"></link>
<div >
    <p className="search__title">
        Let's find cocktail
    </p>
    <div className="searchBar">
    <input id="search" className="search__input" type="text" placeholder="Search" onChange={onChange}/>
    <button className="fa fa-2x fa-plus" aria-hidden="true" id="searchButton" onClick={write}>
    </button> 
    </div>

</div>

<div id="searchTags">
{/* <button className="button-secondary pure-button" disabled="">Rhum</button>
<button className="button-secondary pure-button" disabled="">Mint</button> */}
    <WriteTag value={tag} />

</div> 

<hr></hr>
</>

);

};


export default DisplaySearch;

