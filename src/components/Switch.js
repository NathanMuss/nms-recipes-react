import React from 'react';
import updateFilter from '../actions/updateFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Switch = (props) => {
    return (
        <div className="switch col m2 center">
            <p className="type-label blue-text darken-3">
                {props.type}
            </p>
            <label>
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
