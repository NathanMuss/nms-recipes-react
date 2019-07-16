import React from 'react';

const Ingredient = (props) => {
    //TODO: Turn this into a card/link to the item's recipe page
    return (
        <div className="center">
            <p>{props.item.ingredient}</p>
            <img src={props.item.image} alt={props.item.ingredient}/>
        </div>
    );
}

export default Ingredient;
