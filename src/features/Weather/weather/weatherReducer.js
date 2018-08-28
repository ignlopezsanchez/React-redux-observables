
const initialState = {
    weather: {},
    error: null,
    isLoading: false
};
export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_API':
            return {...state, isLoading: true}
        case 'FETCH_WEATHER_SUCCESS':
            return {...state, isLoading: false, weather: action.payload}
        case 'FETCH_WEATHER_FAIL':
            return {...state, isLoading: false, error: action.payload}
        case 'CLEAR_WEATHER_SEARCH':
            return { weather: [], isLoading: false, error: null}
        default:
            return state
    }
}

