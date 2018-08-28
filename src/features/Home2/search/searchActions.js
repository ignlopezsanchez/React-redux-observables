
export const fetchApi = (searchText) => ({
    type: 'FETCH_API',
    payload: searchText
})
export const fetchUserSuccess = (users) => ({
    type: 'FETCH_USER_SUCCESS',
    payload: users
})
export const fetchUserFail = (error) => ({
    type: 'FETCH_USER_FAIL',
    payload: error
})

export const clearSearch = () => ({
    type: 'CLEAR_SEARCH',
})