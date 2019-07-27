import React, { Component } from 'react';
import './Ingredient.css';
import { Link } from 'react-router-dom';
import updateQuery from '../actions/updateQuery';
import updateResults from '../actions/updateResults';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Ingredient extends Component {
    searchIngredient() {
        this.props.updateQuery(this.props.item.ingredient.trim());
        this.props.updateResults(this.props.item.ingredient.trim());
    }
    render() {
        return (
            <Link to={`/${this.props.item.ingredient}`} onClick={() => {this.searchIngredient()}}>
                <div className="center ingredient-card">
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
