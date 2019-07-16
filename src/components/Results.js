import React from 'react';
import './Results.css';
import CraftedResult from './CraftedResult';

const Results = (props) => {
    if (!props.data) {
        return (
            <div className="container center">
                <h2>Grah! No results, please search for another item</h2>
            </div>
        )
    } else {
        const results = props.data.map((curr, i) => {
            return <CraftedResult item={curr} key={i} />
        })
        
        return (
            <div className="row">
                    {results}
                </div>
        );
    }
}

export default Results;
