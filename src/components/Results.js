import React from 'react';
import './Results.css';
import CraftedResult from './CraftedResult';
import RefinedResult from './RefinedResult';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Results = (props) => {
    const results = handleResults(props.data);
    // Add results filter by combine type
    return (
        <main className="row">
            {results}
        </main>
    );
}

function handleResults(data) {
    const results = []
    buildCraftedResults(data, results);
    buildRefinedResults(data, results);
    if (!results.length) {
        results.push(
            <div className="center" key="noresults">
                <h3>Grah! No results</h3>
            </div>
        )
    }
    return results;
}

function buildRefinedResults(data, arr) {
    arr.push(
            <div key="portable-refiner-banner" className="center section-divider">
                <h3>Portable Refiner Recipes</h3>
            </div>
        )
      if (data.portable && data.portable.length) {
        const portableResults = data.portable.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(portableResults);
    }

    if (data.medium && data.medium.length) {
        arr.push(
            <div key="medium-refiner-banner" className="center section-divider">
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

      if (data.large && data.large.length) {
        arr.push(
            <div key="large-refiner-banner" className="center section-divider">
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
function buildCraftedResults(data, arr) {
    arr.push(
        <div className="center section-divider">
            <h3>Crafted Recipes</h3>
        </div>
        )
        if (data.crafted && data.crafted.length) {
            arr.push(
                <div key="crafted-banner" className="center section-divider">
                    <h3>Crafting Recipes</h3>
                </div>
            )
        const craftedResults = data.crafted.map((curr, i) => {
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
        data: state.results
    }
}

export default connect(mapStateToProps)(Results);
