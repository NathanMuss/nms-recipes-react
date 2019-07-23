import { combineReducers } from "redux";
import results from './resultsReducer';
import query from './queryReducer';

const rootReducer = combineReducers({
    query: query,
    results: results
    });
    

export default rootReducer;