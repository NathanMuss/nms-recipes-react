import React from 'react';
import './Ingredient.css';

const Ingredient = (props) => {
    //TODO: Turn this into a link to the item's recipe page
    return (
        <div className="center ingredient-card">
            <img src={props.item.image} alt={props.item.ingredient}/>
            <p>{props.item.ingredient}</p>
        </div>
    );
}

export default Ingredient;
