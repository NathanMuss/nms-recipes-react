export default (query) => {    
    return {
        type: 'updateQuery',
        payload: {
            query: query
        }
    }
}