import React from 'react';
import axios from 'axios';
import ing from './Ingredients';


const ShoppingListIngredient = () => {
    
    return (
        <div>
            {console.log(ing)}
            <ul>
                <li>
                    <p>{ing}</p>
                </li>
                <li>Ingrédient2</li>
                <li>Ingrédient3</li>
                <li>Ingrédient4</li>
            </ul>
        </div>
    )
}

export default ShoppingListIngredient