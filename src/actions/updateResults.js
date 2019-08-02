export default (query, callback) => {
    if (callback) {
        callback()
    }
    return {
        type: 'updateResults',
        payload: {
            query: query
        }
    }
}