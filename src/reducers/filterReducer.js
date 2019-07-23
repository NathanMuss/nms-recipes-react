const filter = {
    all: true,
    crafted: true,
    portable: true,
    medium: true,
    large: true
}
export default (state = filter, action) => {
    if (action.type === 'updateFilter') {        
        const newState = {...state};
        // Toggle All
        if (action.payload.itemSet === "all") {
            newState.portable = !newState.all;
            newState.medium = !newState.all;
            newState.large = !newState.all;
            newState.crafted = !newState.all;
            newState.all = !newState.all;
            return newState;
        } else {
            // Toggle single
            newState[action.payload.itemSet] = !newState[action.payload.itemSet];
        }
        return newState;
    }
    return state;
}