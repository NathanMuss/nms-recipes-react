export default (query) => {
    return {
        type: 'updateResults',
        payload: {
            query: query
        }
    }
}