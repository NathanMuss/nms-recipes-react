const filter = {
    all: true,
    crafting: true,
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
            newState.crafting = !newState.all;
            newState.all = !newState.all;
            return newState;
        } else {
            // Toggle single
            newState[action.payload.itemSet] = !newState[action.payload.itemSet];
            newState.all = (newState.portable && newState.medium && newState.large && newState.crafting);            
        }
        return newState;
    }
    return state;
}
