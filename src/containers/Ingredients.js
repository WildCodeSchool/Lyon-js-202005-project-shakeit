import React, {useState} from "react";
import axios from "axios";

const Ingredients = ({ item, addIngredient }) => {   

//     const getIngredient = () => {
//         axios
//         .get(
//             `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${item.name}`
//         )
//         .then((response) => response.data)
//         .then((data) => {
//           setIng(data.ingredients[0].strIngredient);
//         });
//     };
  console.log(addIngredient);
  return (
    <li>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${item.name}-Small.png`}
        alt={item.name}
      />
      {item.measure} of {item.name}
      <button onClick={()=>{addIngredient(item)}}>Add</button>
    </li>
  );
};

export default Ingredients;
