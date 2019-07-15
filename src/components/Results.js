import React from 'react';
import './Results.css';

const Results = (props) => {
    
    if (!props.data.craftedResults) {
        return (
            <div className="container center">
                <h2>Please search for an item</h2>
            </div>
        )
    } else {
        const item = props.data.craftedResults[0]
        const ingredients = [];
        ingredients.push({
            ingredient: item.ingredientOne,
            image: `/images/${item.imgOne}.png`
        });   
        if (item.ingredientTwo) {
            ingredients.push({
                ingredient: item.ingredientTwo,
                image: `/images/${item.imgTwo}.png`
            });
        } 
        if (item.ingredientThree) {
            ingredients.push({
                ingredient: item.ingredientThree,
                image: `/images/${item.imgThree}.png`
            });
        } 
        const ingredientView = ingredients.map((curr, i) => {
            return (
                <div key={i} className="col s6">
                    <p>{curr.ingredient}</p>
                    <img src={curr.image} />
                </div>
            )
        })
        
        return (
            <div className="row">
                    <div className="result-container container center">
                        <div className="result-main">
                            <div className="result-details">
                                <p>{item.result}</p>
                                <p>Value: {item.time}</p>
                                <img src={`/images/${item.imgResult}.png`} alt=""/>
                            </div>
                            <div className="result-recipes row">
                                {ingredientView}
                            </div>
                        </div>
                    </div>   
                </div>
        );
    }
}

export default Results;
