import React from 'react';
import updateFilter from '../actions/updateFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Switch.css';

const Switch = (props) => {
    return (
        <div className="switch col s2 m2 center">
            <label>
                <p className="type-label blue-text darken-3">
                    {props.type}
                </p>
                <input type="checkbox" checked={props.filter[props.type]} onChange={() => {props.updateFilter(props.filter, props.type)}}></input>
                <span className="lever"></span>
            </label>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateFilter: updateFilter
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Switch);
