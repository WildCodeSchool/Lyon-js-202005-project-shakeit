import React from 'react';
import wheel from './unnamed.png';
import './RandomButton.css';

function RandomButton(){
        return(
            <div>
                <img src={wheel} title="Display a random cocktail" id="imgTurn" alt="Wheel"/>
            </div>
        );
    }
export default RandomButton;