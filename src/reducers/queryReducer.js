const query = "";
export default (state = query, action) => {
    if (action.type === 'updateQuery') {
        return action.payload.query;
    }
    return state;
}