import React from 'react';

const Ingredient = (props) => {
    return (
        <div className="center">
            <p>{props.item.ingredient}</p>
            <img src={props.item.image} alt={props.item.ingredient}/>
        </div>
    );
}

export default Ingredient;
