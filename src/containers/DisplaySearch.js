import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const DisplaySearch = () => {

return(

<>
<hr></hr>
<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous"></link>
<div >
    <p className="search__title">
        Let's find cocktail
    </p>
    <div className="searchBar">
    <input className="search__input" type="text" placeholder="Search"/>
    <i className="fa fa-2x fa-plus" aria-hidden="true"></i>
    </div>
</div>

<div className="searchTags">
<button className="button-secondary pure-button" disabled="">Rhum</button>
<button className="button-secondary pure-button" disabled="">Mint</button>

</div>
<hr></hr>
</>

);

};


export default DisplaySearch;

