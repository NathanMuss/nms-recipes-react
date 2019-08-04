import React, { Component } from 'react';
import './Ingredient.css';
import { Link } from 'react-router-dom';
import updateQuery from '../actions/updateQuery';
import updateResults from '../actions/updateResults';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class Ingredient extends Component {
    searchIngredient() {
        const ingredientName = this.props.item.ingredient.trim();
        this.props.updateQuery(ingredientName);
        this.props.updateResults(ingredientName);
    }

    render() {   
        return (
            <Link to={`/${this.props.item.ingredient}`} onClick={() => {this.searchIngredient()}}>
                <div className="ingredient-card">
                    <img src={this.props.item.image} alt={this.props.item.ingredient}/>
                    <p>{this.props.item.ingredient}  {this.props.item.ingredientCount ? "x" + this.props.item.ingredientCount : "" }</p>
                </div>
            </Link>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateQuery: updateQuery,
        updateResults: updateResults
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Ingredient);
