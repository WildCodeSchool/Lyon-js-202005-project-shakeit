import React from 'react';
import EmptierButton from '../components/ShoppingList/EmptierButton';
import ShoppingListIngredient from './ShoppingListIngredient';

const ShoppingListContent = () => {
    return (
        <div>
            <h1>Ma shopping-list</h1>
            <ShoppingListIngredient />
            <div>
                <EmptierButton>
                    Vider
                </EmptierButton>
            </div>
        </div>
    )
}

export default ShoppingListContent