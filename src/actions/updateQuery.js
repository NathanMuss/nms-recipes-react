export default (query, callback) => {
    if (callback) {
        callback()
    }
    return {
        type: 'updateQuery',
        payload: {
            query: query
        }
    }
}