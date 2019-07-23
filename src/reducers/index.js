import { combineReducers } from "redux";
import results from './resultsReducer';
import query from './queryReducer';
import filter from './filterReducer';

const rootReducer = combineReducers({
    query: query,
    results: results,
    filter: filter
    });
    

export default rootReducer;