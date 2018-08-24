
const initialState = {
    users: [],
    error: null,
    isLoading: false
};
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_API':
            return {...state, isLoading: true}
        /*case 'UPDATE_ERROR':
            return {users: [], error: action.error, isLoading: false}*/
        case 'FETCH_USER_SUCCESS':
            return {...state, isLoading: false}
        case 'FETCH_USER_FAIL':
            return {...state, isLoading: false}
        case 'CLEAR_SEARCH':
            return { users: [], isLoading: false, error: null}

        default:
            return state
    }
}

