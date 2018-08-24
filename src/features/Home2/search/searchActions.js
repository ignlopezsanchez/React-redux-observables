export const updateError = (error) => ({
    type: 'UPDATE_ERROR',
    error
})

export const updateUsers = (users) => ({
    type: 'UPDATE_USERS',
    users
})
export const fetchUserSuccess = () => ({
    type: 'FETCH_USER_SUCCESS',
})
export const fetchUserFail = () => ({
    type: 'FETCH_USER_FAIL',
})
export const loading = () => ({
    type: 'LOADING',
})
export const clearSearch = () => ({
    type: 'CLEAR_SEARCH',
})

/*
export const updateSearchText = (searchText) => ({
    type: 'UPDATE_SEARCH_TEXT',
    searchText
})
*/
