import React from 'react';
import EmptierButton from '../components/ShoppingList/EmptierButton';

const ShoppingListContent = () => {
    return (
        <div>
            <h1>Ma shopping-list</h1>
            <ul>
                <li>Ingrédient1</li>
                <li>Ingrédient2</li>
                <li>Ingrédient3</li>
                <li>Ingrédient4</li>
            </ul>
            <div>
                <EmptierButton onClick={()=>console.log("Hello")}>
                    Vider
                </EmptierButton>
            </div>
        </div>
    )
}

export default ShoppingListContent