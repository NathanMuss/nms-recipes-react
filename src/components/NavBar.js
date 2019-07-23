import React, { Component } from 'react';
import { getAllResults } from '../utils/searchUtil';
import updateQuery from '../actions/updateQuery';
import updateResults from '../actions/updateResults';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class NavBar extends Component {
    handleSearch(query, e) {
        this.props.history.push(`/${query.toLowerCase()}`)
        if (e) {
            e.preventDefault();
        }
        this.props.updateResults(query);
    }
    componentDidMount() {
        if (this.props.match.params.query) {
            this.props.updateQuery(this.props.match.params.query);
            this.props.updateResults(this.props.match.params.query);
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
                                        <input onChange={() => {this.props.updateQuery(document.getElementById("query").value)}} type="text" placeholder="Condensed Carbon" className="center" id="query" value={this.props.query} />
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

function mapStateToProps(state) {
    return {
        query: state.query
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateQuery: updateQuery,
        updateResults: updateResults
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);