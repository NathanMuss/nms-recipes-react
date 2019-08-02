import React from 'react';
import Ingredient from './Ingredient';

const CraftedResult = (props) => {
    const ingredients = processIngredients(props.item);
    return (
        <div className="result-container container center">
            <div className="result-main">
                <div className="result-details">
                    <h2>{props.item.result} {props.item.resultCount ? "x" + props.item.resultCount : ""}</h2>
                    <img src={`/images/${props.item.imgResult}.png`} alt={props.item.result}/>
                    <h5>Value: {props.item.value}</h5>
                </div>
                <div className="result-recipes row">
                    <h3>Ingredients</h3>
                    {ingredients}
                </div>
            </div>
        </div>  
    );
}

function processIngredients(item) {
    const ingredientList = [];
    ingredientList.push({
        ingredient: item.ingredientOne,
        ingredientCount: item.ingredientOneCount,
        image: `/images/${item.imgOne}.png`
    });   
    if (item.ingredientTwo) {
        ingredientList.push({
            ingredient: item.ingredientTwo,
            ingredientCount: item.ingredientTwoCount,
            image: `/images/${item.imgTwo}.png`
        });
    } 
    if (item.ingredientThree) {
        ingredientList.push({
            ingredient: item.ingredientThree,
            ingredientCount: item.ingredientThreeCount,
            image: `/images/${item.imgThree}.png`
        });
    } 
    const ingredients = ingredientList.map((item, i) => {
        return (
            // 12 columns divided by number of ingredients for column size
            <div key={i} className={`col s${Math.floor(12/ingredientList.length)}`}>
                <Ingredient item={item} />
            </div>
        )
    });
    return ingredients;
}

export default CraftedResult;
