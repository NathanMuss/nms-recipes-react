import React from 'react';
import './Filter.css';
import { connect } from 'react-redux';
import Switch from './Switch';


const Filter = (props) => {
    const filterTypes = Object.keys(props.filter);
    const switches = filterTypes.map((curr, i) => {
        return <Switch key={curr + i} type={curr}/>
    })
    
    
    return (
        <div className="row">
            <div className="col offset-s3 s6 offset-m3 m6 switch-container">
                {switches}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(Filter);
