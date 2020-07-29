import React from "react";
import 'font-awesome/css/font-awesome.min.css';



const DisplayCocktails = () => {

return(
    
 <>   
  

<h2>Cocktails du jour</h2>
<div className="cocktailList">

    <a href="localhost"><img className="logo" src="https://via.placeholder.com/250" alt="Cocktail pic"></img></a>

    <div className="cocktailInfos">
        <p className="cocktailTitle">Title</p>
        <div className="cocktailRate">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>

        </div>
        <i  className=" clickable fa fa-heart"  aria-hidden="true" value="test"></i>
    </div>
</div>



</>

);



};



export default DisplayCocktails;