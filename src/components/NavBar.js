import React, { Component } from 'react';
import { getAllResults } from '../utils/searchUtil';


export default class NavBar extends Component {
    constructor(props) {
        super();
        this.state = {
            query: ""
        }
    }

    handleSearch(query, e) {
        this.props.history.push(`/${query.toLowerCase()}`)
        getAllResults(query);
        if (e) {
            e.preventDefault();
        }
        const results = getAllResults(query);
        this.props.updateResults(results);
    }

    updateQuery(newQuery) {
        //TODO: add typeahead
        this.setState({
            query: newQuery
        })
    }

    componentDidMount() {
        if (this.props.match.params.query) {
            this.handleSearch(this.props.match.params.query);
            this.updateQuery(this.props.match.params.query);
        }
    }
    render() {
        // TODO:  Add options for individual search types e.g. Portable Refiner only, Crafted only etc
        return (
            <div>
                <div className="navbar-fixed ">
                    <nav className="white">
                        <div className="nav-wrapper">
                            <div className="brand-logo red-text left">NMR</div>
                            <div className="row center">
                                <div className="col offset-s2 s9 offset-m2 m8">
                                    <form onSubmit={(e) => this.handleSearch(document.getElementById("query").value, e)}>
                                        <input onChange={() => {this.updateQuery(document.getElementById("query").value)}} type="text" placeholder="Condensed Carbon" className="center" id="query" value={this.state.query} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
