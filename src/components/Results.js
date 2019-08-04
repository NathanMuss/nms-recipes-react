import React, { Component } from 'react';
import './Results.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateQuery from '../actions/updateQuery';
import updateResults from '../actions/updateResults';
import CraftedResult from './CraftedResult';
import RefinedResult from './RefinedResult';


class Results extends Component {
    
    componentDidUpdate(prevProps) {
        window.onpopstate  = (e) => {
            let queryByPath = this.props.location.pathname.substr(1);
            this.props.updateQuery(queryByPath);
            this.props.updateResults(queryByPath);
        }
    }

    render() {
        const results = handleResults(this.props.data, this.props.filter);
        return (
            <main className="row result-container">
                {results}
            </main>
        )
    }
}

function handleResults(data, filter) {
    const results = []
    buildCraftedResults(data, results, filter);
    buildRefinedResults(data, results, filter);
    if (!results.length) {
        results.push(
            <div className="center no-results" key="noresults">
                <h3 className="white-text">Grah! No results</h3>
            </div>
        )
    }
    return results;
}

function buildRefinedResults(data, arr, filter) {
      if (filter.portable && data.portable && data.portable.length) {
        arr.push(
                <div key="portable-refiner-banner" className="center container-fluid section-divider">
                    <h3>Portable Refiner Recipes</h3>
                </div>
            )
        const portableResults = data.portable.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(portableResults);
    }

    if (filter.medium && data.medium && data.medium.length) {
        arr.push(
            <div key="medium-refiner-banner" className="center container-fluid section-divider">
                <h3>Medium Refiner Recipes</h3>
            </div>
        )
        const mediumResults = data.medium.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(mediumResults);
    }

      if (filter.large && data.large && data.large.length) {
        arr.push(
            <div key="large-refiner-banner" className="center container-fluid section-divider">
                <h3>Large Refiner Recipes</h3>
            </div>
        )
        const largeResults = data.large.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(largeResults);
    }
}
function buildCraftedResults(data, arr, filter) {
    if (filter.crafting && data.crafting && data.crafting.length) {
        arr.push(
            <div key="crafted-banner" className="center container-fluid section-divider">
                <h3>Crafting Recipes</h3>
            </div>
        )
        const craftedResults = data.crafting.map((curr, i) => {
            return (
                <CraftedResult item={curr} key={i} />
            )
        });
        arr.push(craftedResults);
    }
}

function mapStateToProps(state) {
    return {
        query: state.query,
        data: state.results,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateQuery: updateQuery,
        updateResults: updateResults,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);