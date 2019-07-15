import React from 'react';
import './Results.css';

const Results = () => {
    return (
          <div className="row">
                <div className="result-container container center">
                    <div className="result-main">
                        <img src="https://www.placecage.com/200/200" alt=""/>
                        <div className="result-details">
                            <ul>
                                <li>Name: Condensed Carbon</li>
                                <li>Price: 100000000</li>
                            </ul>
                        </div>
                        <div className="result-recipes row">
                            <div className="col s6">
                                <p>Made from:</p>
                            </div>
                            <div className="col s6">
                                <p>Stuff</p>
                            </div>
                        </div>
                        <div className="result-used-in row">
                            <div className="col s6">
                                <p>Can Make:</p>
                            </div>
                            <div className="col s6">
                                <p>Things</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
    );
}

export default Results;
