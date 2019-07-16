import React from 'react';
import './Results.css';
import CraftedResult from './CraftedResult';
import RefinedResult from './RefinedResult';

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
      if (data.portable && data.portable.length) {
        const portableResults = data.portable.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(portableResults);
    }

    if (data.medium && data.medium.length) {
        const mediumResults = data.medium.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(mediumResults);
    }

      if (data.large && data.large.length) {
        const largeResults = data.large.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        arr.push(largeResults);
    }
}
function buildCraftedResults(data, arr) {
        if (data.crafted && data.crafted.length) {
        const craftedResults = data.crafted.map((curr, i) => {
            return (
                <CraftedResult item={curr} key={i} />
            )
        });
        arr.push(craftedResults);
    }
}

export default Results;
