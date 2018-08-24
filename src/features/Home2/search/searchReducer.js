
const initialState = {
    users: [],
    error: null,
    isLoading: false
};
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USERS':
            return {...state, users: action.users, error: null}
        case 'UPDATE_ERROR':
            return {users: [], error: action.error, isLoading: false}
        case 'FETCH_USER_SUCCESS':
        case 'FETCH_USER_FAIL':
            return {...state, isLoading: false}
        case 'CLEAR_SEARCH':
            return { users: [], isLoading: false, error: null}
        case 'LOADING':
            return {...state, isLoading: true}
        default:
            return state
    }
}

