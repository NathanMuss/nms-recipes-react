export default (filter, itemSet) => {    
    return {
        type: 'updateFilter',
        payload: {
            filter: filter,
            itemSet: itemSet
        }
    }
}