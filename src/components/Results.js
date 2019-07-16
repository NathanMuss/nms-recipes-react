import React from 'react';
import './Results.css';
import CraftedResult from './CraftedResult';
import RefinedResult from './RefinedResult';

function handleResults(data) {
    const results = []
    if (data.crafted && data.crafted.length) {
        const craftedResults = data.crafted.map((curr, i) => {
            return (
                <CraftedResult item={curr} key={i} />
            )
        });
        results.push(craftedResults);
    }
    if (data.portable && data.portable.length) {
        const portableResults = data.portable.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        results.push(portableResults);
    }

    if (data.medium && data.medium.length) {
        const mediumResults = data.medium.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        results.push(mediumResults);
    }

      if (data.large && data.large.length) {
        const largeResults = data.large.map((curr, i) => {
            return (
                <RefinedResult item={curr} key={i} />
            )
        });
        results.push(largeResults);
    }

    // If no results, put a default message in.
    if (!results.length) {
        results.push(
            <div className="center" key="noresults">
                <h3>Grah! No results</h3>
            </div>
        )
    }
    return results;
}
const Results = (props) => {
    const results = handleResults(props.data);
    return (
        <div className="row">
                {results}
            </div>
    );
}

export default Results;
