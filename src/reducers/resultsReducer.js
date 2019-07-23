import { getAllResults } from '../utils/searchUtil';

export default (state = "", action) => {
    
    if (action.type === 'updateResults') {
        return getAllResults(action.payload.query);
    }
    return state;
}