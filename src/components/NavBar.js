import React, { Component } from 'react';
import updateQuery from '../actions/updateQuery';
import updateResults from '../actions/updateResults';
import updateFilter from '../actions/updateFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NavBar.css';


class NavBar extends Component {
    handleSearch(query, e) {
        this.props.history.push(`/${query.toLowerCase()}`)
        if (e) {
            e.preventDefault();
        }
        this.props.updateQuery(query);
        this.props.updateResults(query);
    }
    componentDidMount() {
        if (this.props.match.params.query) {
            this.props.updateQuery(this.props.match.params.query);
            this.props.updateResults(this.props.match.params.query);
        } else {
            this.props.updateResults();
        }
    }
    showAll() {
        this.props.history.push('/');
        this.props.updateQuery("");
        this.props.updateResults("");
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed ">
                    <nav className="white">
                        <div className="nav-wrapper">
                            <button className="btn waves-effect waves-light right reset" onClick={() => this.showAll()}>Show All</button>
                            <div className="row center">
                                <div className="col s6 offset-m3 m6">
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
        updateResults: updateResults,
        updateFilter: updateFilter
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);