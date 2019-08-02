import React from 'react';
import './Results.css';
import CraftedResult from './CraftedResult';
import RefinedResult from './RefinedResult';
import { connect } from 'react-redux';


const Results = (props) => {
    const results = handleResults(props.data, props.filter);
    return (
        <main className="row result-container">
            {results}
        </main>
    );
}

function handleResults(data, filter) {
    const results = []
    buildCraftedResults(data, results, filter);
    buildRefinedResults(data, results, filter);
    if (!results.length) {
        results.push(
            <div className="center" key="noresults">
                <h3>Grah! No results</h3>
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

export default connect(mapStateToProps)(Results);
